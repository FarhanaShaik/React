import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import {Link} from "react-router-dom";
import Slider from 'material-ui/Slider';
import { pencil } from 'react-icons-kit/icomoon/pencil';
import { search } from 'react-icons-kit/icomoon/search';
import {contentHeading} from "../projects/Projects.css";
import { ic_delete } from 'react-icons-kit/md/ic_delete';
 import { ic_create } from 'react-icons-kit/md/ic_create';
import {textAreaStyle,tableDiv,addNewDepartmentStyle,dropDownInputStyle,divStyle,
  boxText,imageText,contentStyle} from "../settings/LayoutSettings.css";
  import {displayContainer,arrowIcon} from "../Layout.css";
  import {hyperLinkEmployee,hrStyle} from "./LayoutEmployee.css";
import {pageHeading,labelStyle,inputstyle,formStyle,inputStyle,floatRight,enableBtn,disableBtn,
  inputStyle1,labelStyle1,buttonstyle,overtimeDiv,iconStyle} from "./LayoutSettings.css";

export class BankDetails extends React.Component{
  render() {
    return(

       <div className={displayContainer}>
<p>Employee>>Add Employee>><span className={pageHeading}>Bank Details</span></p>
<hr className={hrStyle}/>
  <Form className={formStyle}>
<div className={floatRight} style={{fontSize:'0.9vw',marginTop:'1.5vw'}}>
<p>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
<p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
</div>
<MuiThemeProvider>
   <Slider style={{height: 180,float:'right'}} axis="y-reverse" defaultValue={0.43} />
   </MuiThemeProvider>

      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Account Holder Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Bank Name</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Branch Name</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
          </div>
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Account Number</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />
          </div>
          </div>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>IFSC Code</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
          </div>
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Account Type</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />
          </div>
          </div>
</Form>
<p className={pageHeading} style={{marginTop:'2vw'}}>Salary Component</p>
<hr className={hrStyle}/>

 <table class="table table-bordered table-responsive-md" id={contentStyle}>
         <thead>
             <tr style={{backgroundColor:'#D6D6D6'}}>
                 <th colspan="2" style={{textAlign:'center'}}>Earnings</th>
                 <th colspan="2" style={{textAlign:'center'}}>Deductions</th>

             </tr>
             <tr>
                 <th>Add</th>
                 <th></th>
                 <th></th>
                 <th></th>

             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>Basic</td>
                 <td>5000</td>
                 <td> </td>
                 <td> </td>

             </tr>
             <tr>
                 <td>Basic</td>
                 <td>5000</td>
                 <td> 500</td>
                 <td> </td>
             </tr>
         </tbody>
     </table>
     <p><strong>Net Pay:1,00,000</strong></p>
     <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
     <Link to="/LoginInfo" className={hyperLinkEmployee}>Save</Link></Button>
     <Link to="/LoginInfo" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip</Link>

          <span className={floatRight}>

          <Link to="/ProfessionalDetails" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
            <Icon icon={arrowLeft2} className={arrowIcon} size={14}  />Previous</Link>
          <Link to="/LoginInfo" className={hyperLinkEmployee}>Next
            <Icon icon={arrowRight2} className={arrowIcon} size={14} /></Link>
       </span>
       </div>
     );
   }
 }
