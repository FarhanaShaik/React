import React from "react";
import {render} from "react-dom";
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {containerRegistration }from "./LayoutRegistration.css";
export class LoginPage extends React.Component{
  render()
  {
    return(
      <div className={containerRegistration}>
      Hello
      </div>

    );
  }
}
