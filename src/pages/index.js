import React from "react";
import DarkTheme from "../layouts/Dark";
import Home from "./home";

function index() {
  return (
    <>
      <DarkTheme>
        <Home />
      </DarkTheme>
    </>
  );
}

export default index;
