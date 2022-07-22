import React from "react";
import { Field } from "formik";
import styles from "@/styles/register.module.css";

const DigitInput = ({ name, placeholder, action }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <input
            {...field}
            type="text"
            placeholder={placeholder}
            maxLength="1"
            size="1"
            pattern="[0-9]"
            className={`${styles.formControl} ${styles.validationDigit} form-control text-center border-none`}
            onPaste={action}
          />
        );
      }}
    </Field>
  );
};

export default DigitInput;
