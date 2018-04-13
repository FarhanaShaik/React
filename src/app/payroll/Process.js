import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import {displayContainer} from "../Layout.css";
import {pageHeading,hrStyle,labelStyle,inputstyle1,formStyle,inputStyle,inputstyle,textAreaStyle,
labelStyle1,dropDownInputStyle,buttonstyle,checkboxDiv,divStyle,radioStyle1,boxText,imageText,radioStyle,
labelStyleRadio,imageInput,iconStyle} from "../settings/LayoutSettings.css";

export class Process extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p>Payroll>><span className={pageHeading}>Process</span></p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
       <div class="form-row">
       <div class="col-md-3 mb-3">
       <label className={labelStyle1}>Payment Type</label>
       <select id="" class="form-control" id={inputstyle}>
       <option></option>
       </select>
       </div>
<div class="col-md-3 mb-3">
<label className={labelStyle1}>Select Period</label>
<select id="" class="form-control" id={inputstyle}>
<option></option>
</select>
</div>
  </div>
  <div class="form-row">
  <div class="col-sm-6">
  <label className={labelStyle1}>Select Employees</label>
  <select id="" class="form-control" id={inputstyle}>
  <option></option>
  </select>
  </div>
  </div>
          </Form>
       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>Process</Button>
       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>Cancel</Button>




      </div>
    );
  }
}
