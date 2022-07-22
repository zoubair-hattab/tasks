import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "./utils/error";
const CompanyDescriptionForm = () => {
  return (
    <>
      <h5>Company Description</h5>
      <div className={`${styles.companyDescription}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field name="short_description">
            {({ field, meta }) => {
              return (
                <textarea
                  {...field}
                  placeholder="Short Description..."
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                  style={{ height: "100px" }}
                ></textarea>
              );
            }}
          </Field>

          <Field name="long_description">
            {({ field, meta }) => {
              return (
                <textarea
                  {...field}
                  placeholder="Long Description..."
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                  style={{ height: "150px" }}
                ></textarea>
              );
            }}
          </Field>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="short_description"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="long_description"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyDescriptionForm;
