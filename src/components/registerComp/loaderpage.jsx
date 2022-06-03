import React from "react";
import logoLoader from "../../assets/Logo-loader.png";
import { Imglogo, Loader } from "../../styles/registerStyles";
export default function Loaderpage() {
  return (
    <>
      <Loader>
        <Imglogo src={logoLoader} alt="logo-loader" />
      </Loader>
    </>
  );
}
