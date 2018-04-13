import React from "react";
import {displayHome} from "../Layout.css";
import {FirstRow} from "./FirstRow";
import {SecondRow} from "./SecondRow";
import {ThirdRow} from "./ThirdRow";
import {FourthRow} from "./FourthRow";

export class Home extends React.Component {

  render() {

     return(
       <div className={displayHome}>
        <FirstRow/>
      <SecondRow/>
      <ThirdRow/>
      <FourthRow/>
   </div>


     );
  }
}
