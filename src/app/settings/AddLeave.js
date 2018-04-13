import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import $ from "jquery";
import {Link} from "react-router-dom";
import Slider from 'material-ui/Slider';

import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle1,formStyle,inputStyle,inputstyle,textAreaStyle,
labelStyle1,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,hyperLink,floatRight,
boxText,imageText,radioStyle,labelStyleRadio,imageInput,iconStyle} from "./LayoutSettings.css";

export class AddLeave extends React.Component{
  render() {

    return(
      <div className={displayContainer}>
<p className={pageHeading} onClick={this.handle}>Leaves</p>
<p id="click"></p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
     <div className={floatRight} style={{fontSize:'0.9vw'}}>
     <p style={{marginTop:'1.5vw'}}>
     <Link to="/CompanyDetails" className={hyperLink}>Organization Details</Link></p>
     <p><Link to="/AttendanceSettings" className={hyperLink}>Attendance</Link></p>
     <p><Link to="/AddLeave" className={hyperLink}>Leave Types</Link></p>
     <p><Link to="/AddComponent" className={hyperLink}>Salary Cmponents</Link></p>
     </div>
     <MuiThemeProvider>
        <Slider style={{height: 115,float:'right'}} axis="y-reverse" defaultValue={0.70} />
        </MuiThemeProvider>
       <FormGroup>

         <Label className={labelStyle}>Leave Name</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>
       <div class="form-row">
         <div class="col-md-3 mb-3">
           <label className={labelStyle1}>Total Count</label>
           <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

         </div>
         <div class="col-md-3 mb-3">
           <label className={labelStyle1}>Maximum Leaves Per Month</label>
           <input type="text" class="form-control" id={inputstyle} placeholder="" />

         </div>
         </div>
       <FormGroup>
            <Label className={labelStyle}>Description</Label>
            <Input className={textAreaStyle} type="textarea" name="text" id="" />
          </FormGroup>
           <div class="form-row">
           <div class="col-md-3 mb-3">
           <label className={labelStyle1}>In Probation</label>
           <select id="" class="form-control" id={inputstyle}>
           <option></option>
           </select>
           </div>
<div class="col-md-3 mb-3">
<label className={labelStyle1}>Half Day</label>
<select id="" class="form-control" id={inputstyle}>
<option></option>
</select>
</div>
      </div>
          <FormGroup>
          <div class="row">
            <legend class="col-form-label  col-sm-2 pt-0" style={{fontSize:'0.8vw'}}>Status</legend>
            <div class="col-sm-10" style={{marginLeft:'-8vw',marginTop:'-0.4vw'}}>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
                style={{marginTop:'0.7vw'}}/>
                <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.45vw'}}>
                  Active
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
                <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw'}}>
                inActive
                </label>
              </div>

              </div>
              </div>
        </FormGroup>
          </Form>

       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
       <Link to="/LeaveTypes" className={hyperLink}>Save</Link></Button>
       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
       <Link to="/AttendanceSettings" className={hyperLink}>Back</Link></Button>
       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
       <Link to="/AddComponent" className={hyperLink}>Next</Link></Button>
       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle} style={{border:'none'}}>
       <Link to="/AddComponent" className={hyperLink}>Skip this</Link></Button>




      </div>
    );
  }
}
