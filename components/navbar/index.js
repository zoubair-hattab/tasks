import React from "react";
import Nav from "../nav";
import { BsTelegram } from "react-icons/bs";
import Button from "../button";
const Navbar = () => {
  return (
    <div className="header">
      <div className="overlay"></div>

      <Nav />

      <video
        src="../video/siwss-alps.webm"
        autoPlay
        muted={true}
        loop={true}
        className="video-background"
      />

      <div className="text-center w-100 text-white header-content text-bodoni d-flex justify-content-between h-75 flex-column">
        <div>
          <p className="h1">Lorem ipsum dolor sit amet</p>
          <p className="h4">slagon</p>
        </div>
        <div className="ripple rounded-pill">
          <Button classStyle={"rounded-pill"}>
            Join Us <BsTelegram fontSize={"25"} className={"ms-2"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
