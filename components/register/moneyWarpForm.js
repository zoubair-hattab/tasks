import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import { countries } from "./utils/countriesList";
import Error from "./utils/error";

const MoneyWarpForm = () => {
  return (
    <>
      <h5>How many SGB/FLR do you want your community to wrap?</h5>
      <div className={`${styles.phoneNumber}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="d-flex">
          <Field name="money_fund">
            {({ field, meta }) => {
              return (
                <input
                  {...field}
                  type="number"
                  placeholder="99999999"
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
            name="money_fund"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default MoneyWarpForm;
