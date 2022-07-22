import React from "react";
import styles from "@/styles/register.module.css";
import Dropzone from "@/utils/dropzone";
import { Field } from "formik";

const DropzoneIdentity = () => {
  return (
    <div className={`${styles.verifyIdentity}`}>
      <p className="py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <>
        <div className={`${styles.dropzoneInput}`}>
          <Field name="id_image" type="file">
            {({ form }) => {
              const { values } = form;
              const { identity_type } = values;
              return (
                <Dropzone
                  form={form}
                  label={`Drag 'n' drop your ${
                    !identity_type ? "Government ID " : identity_type
                  }`}
                  field_name={"id_image"}
                />
              );
            }}
          </Field>
        </div>

        <div className={`${styles.dropzoneInput} mt-2`}>
          <Field name="selfie_image" type="file">
            {({ form }) => {
              return (
                <Dropzone
                  form={form}
                  label="Drag 'n' drop your selfie"
                  field_name={"selfie_image"}
                />
              );
            }}
          </Field>
        </div>
      </>
    </div>
  );
};

export default DropzoneIdentity;
