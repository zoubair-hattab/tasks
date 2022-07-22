import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "./utils/error";
const SocialLinksForm = () => {
  return (
    <>
      <h5>Social Profile</h5>
      <div className={`${styles.socialProfile}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field name="twitter">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="twitter"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="linkedin">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="Linkedin (Optional)"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="instagram">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="Instagram (Optional)"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="facebook">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="Facebook (Optional)"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="twitter"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="linkedin"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="instagram"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="facebook"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default SocialLinksForm;
