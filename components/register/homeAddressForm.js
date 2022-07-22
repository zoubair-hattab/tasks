import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";
import { countries } from "@/utils/countriesList";
const HomeAddressForm = () => {
  return (
    <>
      <h5>Home Address</h5>
      <div className={`${styles.homeAddress}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field
            name="country"
            as="select"
            className={`${styles.formControl} form-select selectpicker`}
            id="company_compaign_countries"
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
          <Field name="zip_code">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="Zip Code"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="address_one">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="Address One"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="address_two">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="Address Two (Optional)"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="city">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="text"
                  placeholder="City"
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
            name="country"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="zip_code"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="address_one"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="address_two"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage name="city" render={(msg) => <Error error={msg} />} />
        </div>
      </div>
    </>
  );
};

export default HomeAddressForm;
