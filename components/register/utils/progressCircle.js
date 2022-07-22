import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Image from "next/image";
const ProgressCircle = () => {
  const percentage = 60; //Finish the caluclition of the percentage
  return (
    <div className="mx-auto" style={{ width: 100, height: 100 }}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          pathColor: "black",
        })}
      >
        <div className="d-flex justify-content-center align-items-center">
          <Image
            width="75"
            height="75"
            src="/images/progress_circle.png"
            alt="prgress circle image "
          />
          <div className="position-absolute fw-bold fs-5">{percentage}%</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ProgressCircle;
