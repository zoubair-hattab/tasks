import React, { useState, createContext } from "react";
import { imageUpload } from "../utils/imageUpload";


import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Title from "@/components/title";

import styles from "@/styles/register.module.css";
import { Formik, Form } from "formik";
import Button from "@/components/button";
import validationSchemaArray from "@/utils/validationSchema";
import ProgressCircle from "@/utils/progressCircle";
import stepContentArray from "@/utils/steps";
import initialValues from "@/utils/initialValues";
import { IoMdArrowBack, IoIosArrowBack } from "react-icons/io";
import { postData,postmail } from "@/utils/fetchData";

// Fixed the arrow back styling is ugly

// handle the api request
export const ValuesContext = createContext();

const Register = () => {
  const [confirm,setConfirm]=useState("");

const handleForm = async (values, actions) => {

 
  actions.setSubmitting(false);

  let newImages = [];
  let newImageself = [];
  let munself=0
  let num = 0;
  if (values.id_image=== 0 &&values.selfie_image=== 0)
   console.log("sorry")
   values.id_image.forEach((file) => {
 
    num += 1;
    if (num <= 5) newImages.push(file);
    return newImages;
  });
  values.id_image=([...newImages]);
  values.selfie_image.forEach((file) => {
      munself += 1;
    if (munself <= 5) newImageself.push(file);
    return newImageself;
  });
  values.selfie_image=([...newImageself]);
  let media = [];
  let media2 = [];
  const imgNewURL = values.id_image.filter((img) => !img.url);
  const imgNewURL1 = values.selfie_image.filter((img) => !img.url);
  console.log("imgNewURL",imgNewURL)
  console.log("imgNewURL1",imgNewURL1)
  if (imgNewURL.length > 0) media = await   imageUpload(imgNewURL);
  if (imgNewURL1.length > 0) media2 = await imageUpload(imgNewURL1);
let res;
const val={id_image:values.id_image,selfie_image:values.selfie_image,...values}
console.log(val)
res = await postData("compaing", {
...val,
  id_image:     [...media],
  selfie_image: [...media2],

});
console.log(res)
console.log("well done")
};
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep == stepContentArray.length - 1;
  // Handle the email verfication number api
  const handleConfirmationEmailNumber = (values, actions) => {

    if (values.validation_email_number == confirm) {
      setActiveStep(activeStep + 1);
    } else {
      actions.setFieldError(
        "validation_email_number",
        "Oops! uncorrect  email confirmation number ."
      );
    }
  };
  // handle the phone verfication number api
  const handleConfirmationPhoneNumber = (values, actions) => {
    if (values.validation_phone_number == 123456) {
      setActiveStep(activeStep + 1);
    } else {
      actions.setFieldError(
        "validation_phone_number",
        "Oops! uncorrect phone confirmation number ."
      );
    }
  };

  const handleSubmit = async (values, actions) => {

    if (isLastStep) {
      handleForm(values, actions);
    } else {
     if( values.email )
     {
    const  result = await postmail("mail", {
      email: values.email
        
        });
        setConfirm(result.value[0].otp)  

 }



      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  const returnToEmail = () => {
    setActiveStep(1);
  };

  const returnToPhone = () => {
    setActiveStep(3);
  };

  return (
    <div>
      <Title pageName={"Register"} />
      <Nav />
      <div className="container py-3">
        <h2 className="text-center text-roboto">Launch A New Compaign</h2>
        <p className="text-robot mt-2 text-center cf-gray6f">
          Please fill the form below to to launch a new compaign.
        </p>

        <div className={`d-flex justify-content-center mt-5`}>
          <Formik
            initialValues={initialValues}
            onSubmit={
              activeStep == 2
                ? handleConfirmationEmailNumber
                : activeStep == 4
                ? handleConfirmationPhoneNumber
                : handleSubmit
            }
            validationSchema={validationSchemaArray[activeStep]}
          >
            {(formik) => {
              return (
                <Form className={`${styles.form}`}>
                  {activeStep > 0 && (
                    <div className={`d-flex justify-content-center`}>
                      <Button
                        variant="bg-white"
                        classStyle={"rounded-pill mb-5 border-dark shadow-sm"}
                        click={handlePreviousStep}
                      >
                        <IoIosArrowBack />
                      </Button>
                    </div>
                  )}

                  <div className={`${styles.formContent} bg-white rounded-20`}>
                    <ProgressCircle />
                    <hr />
                    <ValuesContext.Provider
                      value={{
                        returnToEmail,
                        returnToPhone,
                        values: formik.values,
                      }}
                    >
                      {stepContentArray[activeStep]}
                      {/* {stepContentArray[16]} */}
                    </ValuesContext.Provider>
                  </div>

                  <div className={`d-flex justify-content-center mt-5`}>
                    <button
                      // disabled={formik.isSubmitting}
                      type="submit"
                      className={`${styles.btn} btn btn-black rounded-pill py-2`}
                    >
                      {isLastStep
                        ? "Submit"
                        : activeStep == 2 || activeStep == 4
                        ? "confirm"
                        : "Continue"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
