import React from "react";

import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { plus } from 'react-icons-kit/icomoon/plus';
import {Link} from "react-router-dom";
import Slider from 'material-ui/Slider';
import {hrStyle} from "./LayoutEmployee.css";
import {displayContainer,arrowIcon} from "../Layout.css";
import {pageHeading,labelStyle,inputstylefile,formStyle,inputStyle,floatRight,enableBtn,disableBtn,
  inputStyle1,inputstyle,labelStyle1,buttonstyle,divStyle,overtimeDiv,boxText,imageText,imageInput,iconStyle,hyperLinkEmployee}
  from "./LayoutSettings.css";


export class EmpDocs extends React.Component{
  render() {
    return(


       <div className={displayContainer}>
<p>Employee>>Add Employee>><span className={pageHeading}>Employee Documents</span></p>
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
   <Slider style={{height: 180,float:'right'}} axis="y-reverse" defaultValue={1} />
   </MuiThemeProvider>
      <Row>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Document Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
        <label className={labelStyle1}></label>
        <input type="file" class="form-control" id={inputstyle} placeholder="" />
        </div>

        </Row>
        <button className="btn btn-outline-primary btn-sm" id={buttonstyle}>Submit</button>


</Form>


<div style={{marginTop:'10vw'}}>
<Link to="/JobHistory" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip</Link>

     <span className={floatRight}>

     <Link to="/JobHistory" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
       <Icon icon={arrowLeft2} className={arrowIcon} size={14}  />Previous</Link>

  </span>

          </div>

       </div>
     );
   }
 }
