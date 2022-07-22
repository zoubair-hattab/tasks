import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "./utils/error";
const PersonalDetialsForm = () => {
  return (
    <>
      <h5>Personal Details</h5>
      <div className={`${styles.personalDetails}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field name="first_name">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="First Name"
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="last_name">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="Last Name"
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="date_birthday">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="date"
                  placeholder=""
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="first_name"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="last_name"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="date_birthday"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalDetialsForm;
