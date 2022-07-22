import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";

const RaisePeriodForm = () => {
  return (
    <>
      <h5>How long the raise period?</h5>
      <div className={`${styles.raisePeriod}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="d-flex">
          <div className="input-group">
            <Field name="raise_period">
              {({ field, meta }) => {
                return (
                  <input
                    {...field}
                    type="number"
                    max={30}
                    min={1}
                    placeholder="Raise Period "
                    className={`${styles.formControl} form-control border-none mt-2`}
                    aria-describedby="days_number"
                  />
                );
              }}
            </Field>
            <span
              className={`${styles.daysForm} border-none input-group-text mt-2`}
              id="days_number"
            >
              Days
            </span>
          </div>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="raise_period"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default RaisePeriodForm;
