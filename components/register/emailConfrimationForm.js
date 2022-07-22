import React, { useContext } from "react";
import styles from "@/styles/register.module.css";
import { ValuesContext } from "../../pages/register";
import { Field, ErrorMessage } from "formik";
import PinField from "react-pin-field";
import Error from "@/utils/error";
const EmailConfrimationForm = () => {
  const { returnToEmail } = useContext(ValuesContext);

  return (
    <>
      <h5>Email Confirmation</h5>
      <div className={`${styles.emailConfirmation} `}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
          <button
            className="btn btn-link p-0 mb-2 ms-1"
            type="button"
            onClick={returnToEmail}
          >
            Edit your email
          </button>
        </p>
        <div className="d-flex justify-content-between">
          <Field name="validation_email_number">
            {({ form }) => {
              const { setFieldValue } = form;
              return (
                <PinField
                  length={6}
                  validate={"0123456789"}
                  onComplete={(value) => {
                    setFieldValue("validation_email_number", value);
                  }}
                  className={`${styles.formControl} ${styles.validationDigit} form-control text-center border-none`}
                />
              );
            }}
          </Field>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="validation_email_number"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default EmailConfrimationForm;
