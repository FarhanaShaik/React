import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import {Link} from "react-router-dom";
import Slider from 'material-ui/Slider';
import {displayContainer,floatRight,arrowIcon} from "../Layout.css";
import {pageHeading,hrStyle,labelStyle,inputstyle,formStyle,inputStyle,
  inputStyle1,labelStyle1,buttonstyle,hyperLinkEmployee} from "./LayoutEmployee.css";
export class PersonalDetails extends React.Component{
  render() {
    return(
       <div className={displayContainer}>
<p>Employee>>Add Employee>><span className={pageHeading}>Personal Details</span></p>
<hr className={hrStyle}/>
      <Form className={formStyle}>
      <div className={floatRight} style={{fontSize:'0.9vw'}}>
      <p style={{marginTop:'1.5vw'}}>
      <Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
      <p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
      <p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
      <p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
      <p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
      <p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
      </div>
      <MuiThemeProvider>
         <Slider style={{height: 180,float:'right'}} axis="y-reverse" defaultValue={0.08} />
         </MuiThemeProvider>
      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Fathers Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>DOB</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Gender</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

          </div>
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Phone</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />

          </div>
          </div>
        <FormGroup>

          <Label className={labelStyle}>Permanent Address</Label>
          <Input className={inputStyle} type="text" name="" id="" placeholder="" />
        </FormGroup>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Nationality</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

          </div>
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Marital Status</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />
          </div>
          </div>

           </Form>

        <p className={pageHeading}>Emergency Contact Details</p>

        <Form className={formStyle}>

          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Contact Person Name</label>
              <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
            </div>
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Phone</label>
              <input type="text" class="form-control" id={inputstyle} placeholder="" />
            </div>
            </div>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label className={labelStyle1}>Relationship</label>
                  <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

                </div>
                <div class="col-md-3 mb-3">
                  <label className={labelStyle1}>Email ID</label>
                  <input type="text" class="form-control" id={inputstyle} placeholder="" />
                </div>
                </div>
          </Form>
          <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
          <Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Save</Link></Button>
          <Link to="/ProfessionalDetails" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip</Link>
          <span className={floatRight}><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Next
          <Icon icon={arrowRight2} size={14} className={arrowIcon} /></Link></span>
          <div>


          </div>
       </div>
     );
   }
 }
