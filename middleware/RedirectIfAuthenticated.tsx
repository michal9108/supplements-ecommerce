import React from "react";
import { Navigate } from "react-router-dom";
import {RedirectIfAuthenticatedProps} from "../src/shared/types"



function RedirectIfAuthenticated({ Component }: RedirectIfAuthenticatedProps) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  return Component ;
}
export default RedirectIfAuthenticated;
