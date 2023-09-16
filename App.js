import React from "react";
import {NativeBaseProvider, Text,Box, Input} from "native-base";
import Login from "./components/Login"
import CustomInput from "./components/CustomInput.js";
import SingUp from "./components/SingUp.js"
import ResetPassword from "./components/ResetPassword"
import ForgotPassword from "./components/ForgotPassword";

export default function App() {

  return(
      <NativeBaseProvider>
        <Login></Login>

        {/* <SingUp></SingUp> */}

        {/* <ResetPassword></ResetPassword> */}

        {/* <ForgotPassword></ForgotPassword> */}
        
      </NativeBaseProvider>
   );
};


