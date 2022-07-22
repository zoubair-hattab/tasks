import React, { useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "styles/globals.css";

import "@/styles/navbar.css";
import "@/styles/show_component.css";

function MyApp({ Component, pageProps }) {
  //loading js for bootstrap
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  });
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
