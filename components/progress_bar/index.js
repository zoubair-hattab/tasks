import React from "react";
import style from "@/styles/progress_bar.module.css";
const index = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="">
        <p className="text-bodoni">999% ETH LOCKED</p>
      </div>
      <div className="w-50">
        <div className={`${style.progressCore} progress`}>
          <div
            className={`${style.bar} progress-bar`}
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="">
        <p className="text-bodoni"> 999 ETH GOAL</p>
      </div>
    </div>
  );
};

export default index;
