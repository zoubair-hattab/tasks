import React from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Dropzone = ({
  form,
  label = "Drop and Drop your files or click",
  field_name,
}) => {
  const { setFieldValue, setFieldError } = form;
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      multiple: false,
      accept: {
        "image/png": [".png", ".jpg", ".jpeg"],
      },
      maxSize: 10000000,
      minSize: 2000000,
      onDrop: (acceptedFiles, fileRejections) => {
        setFieldValue(field_name, acceptedFiles);
        setFieldError(field_name);
      },
    });
  return (
    <>
      <div {...getRootProps({ className: "dropzone rounded-20" })}>
        <input {...getInputProps()} />
        {acceptedFiles.length == 0 ? (
          <div>
            <p>{label}</p>
            <div className="text-center mt-3">
              <AiOutlineCloudUpload fontSize={"30"} />
            </div>
          </div>
        ) : (
          <>
            {acceptedFiles.map((file, index) => {
              return <div key={index}>{file.name}</div>;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Dropzone;
