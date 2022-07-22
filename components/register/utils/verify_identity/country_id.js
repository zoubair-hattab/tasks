import React from "react";
import styles from "@/styles/register.module.css";
import { Field, ErrorMessage } from "formik";
import { countries } from "@/utils/countriesList";

const CountryId = () => {
  return (
    <div className={`${styles.verifyIdentity}`}>
      <p className="py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div>
        <Field
          name="identity_country"
          as="select"
          className={`${styles.formControl} form-select selectpicker`}
        >
          <option value="" disabled defaultValue>
            Choose a Country
          </option>
          {countries.map((country) => {
            return (
              <option value={country.name} key={country.code}>
                {country.flag}
                {"  "}
                {country.name}
              </option>
            );
          })}
        </Field>
        <p className={`${styles.labelExeplination} mt-3`}>
          Please be prepared to submit the following:
        </p>
        <ul className="list-unstyled ms-3">
          <li>
            <div
              className={`${styles.ulCircle}  d-inline-flex justify-content-center align-items-center rounded-circle mt-1 me-1`}
            >
              1
            </div>
            Goverment ID
          </li>
          <li>
            <div
              className={`${styles.ulCircle} d-inline-flex justify-content-center align-items-center rounded-circle mt-1 me-1`}
            >
              2
            </div>
            Selfie
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryId;
