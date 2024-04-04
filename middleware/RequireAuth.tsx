import React from "react";
import { Navigate } from "react-router-dom";
import {RequireAuthProps} from "../src/shared/types"


function RequireAuth({ Component }: RequireAuthProps) {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/signin" />;
  }
  return Component;
}
export default RequireAuth;
