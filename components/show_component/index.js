import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import CountDown from "@/components/countDown";
const index = () => {
  return (
    <div className="mb-5 bg-white py-5 rounded-20">
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
            <Link href={`https://www.google.com`} passHref>
              <a rel="noopener noreferrer" target="_blank">
                <Image
                  src={"/images/placeholder_image.jpg"}
                  alt="image-placeholder"
                  className="rounded-circle d-block"
                  width={"200"}
                  height={"200"}
                />
              </a>
            </Link>

            <Link href={`https://www.google.com`}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className={`cf-grey65 d-block href-hover`}
              >
                Learn more
              </a>
            </Link>
          </div>
        </div>

        <div className="col-md-7">
          <div className={`d-flex justify-content-center h-100`}>
            <div>
              <p className="h4 text-uppercase text-bodoni">Compaign Title</p>
              <p className={`mt-4`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="d-flex justify-content-center align-items-center h-100 text-center">
            <div>
              <Button classStyle="rounded-pill text-bodoni mb-2 w-show-component bg-gray88">
                Set Alarm
              </Button>
              <div className="text-bodoni mt-2 rounded-2 bg-spaces p-2">
                <CountDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
