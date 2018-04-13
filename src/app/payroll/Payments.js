import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import {inProgress,closed} from "../projects/Projects.css";
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight,verticalLine,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle,orange} from "../Layout.css";
import { ic_create,ic_delete  } from 'react-icons-kit/md';

export class Payments extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p>Payroll>><span className={pageHeading}>Payments</span><span className={floatRight}><Icon icon={search}/></span></p>
<hr className={hrStyle}/>

<table class="table table-bordered table-striped table-responsive-md" id={contentStyle}>
<thead>
      <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>JOb Title</th>
          <th>CTC</th>
          <th>Effective Date</th>
          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E123</td>
         <td>Enosh David</td>
         <td >Product Manager</td>
         <td>1,00,000</td>
         <td>01/01/2018</td>
          <td className={inProgress}>Active</td>
         <td><Link to="/" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td>E555</td>
         <td>Arul Prem</td>
         <td >MIS Executive</td>
         <td>2,00,000</td>
         <td>05/02/2018</td>
          <td className={closed}>inActive</td>
         <td><Link to="/" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td>E234</td>
         <td>Sachin</td>
         <td >Software Engineer</td>
         <td>5,00,000</td>
         <td>05/02/2018</td>
          <td className={inProgress}>Active</td>
         <td><Link to="/" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
              <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td>E543</td>
         <td>David</td>
         <td >Product Manager</td>
         <td>2,00,000</td>
         <td>05/02/2018</td>
          <td className={closed}>inActive</td>
         <td><Link to="/" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     </tbody>
     </table>
      </div>
    );
  }
}
