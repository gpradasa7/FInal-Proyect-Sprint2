import React, { useEffect, useState } from "react";
import Register1 from "../components/registerComp/register1";
import Loaderpage from "../components/registerComp/loaderpage";
import { GlobalStyle } from "../styles/GlobalStyles";
export default function Register() {
  const [loader, setLoader] = useState(false);

  const handleChange = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };
  useEffect(() => {
    handleChange();
  }, []);
  if (loader) {
    return (
      <>
        <GlobalStyle />
        <Loaderpage />
      </>
    );
  }
  return (
    <>
      <GlobalStyle />
      <Register1 />
    </>
  );
}
