import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "./utils/error";
import { countries } from "./utils/countriesList";
const BusinessRecordsForm = () => {
  return (
    <>
      <h5>Your Business records</h5>
      <div className={`${styles.BussinessRecord}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field
            name="country_business_address"
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

          <Field name="legal_business_name">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="Legal Business Name"
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
            name="country_business_address"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="legal_business_name"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default BusinessRecordsForm;
