import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";
import { countries } from "@/utils/countriesList";
const BusienssAddressForm = () => {
  return (
    <>
      <h5>Business Address</h5>
      <div className={`${styles.busienssAddress}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field
            name="business_country"
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
          <Field name="business_zip_code">
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
          <Field name="business_address_one">
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
          <Field name="business_address_two">
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
          <Field name="business_city">
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
            name="business_country"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="business_zip_code"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="business_address_one"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="business_address_two"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="business_city"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default BusienssAddressForm;
