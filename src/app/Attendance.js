
import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
  import { pencil } from 'react-icons-kit/icomoon/pencil'
import { bin } from 'react-icons-kit/icomoon/bin';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight,verticalLine,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle,orange} from "./Layout.css";
import { ic_delete } from 'react-icons-kit/md/ic_delete';
 import { ic_create } from 'react-icons-kit/md/ic_create';
export class Attendance extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p>Leaves & Time>><span className={pageHeading}>Attendance</span><span className={floatRight}></span></p>
<hr className={hrStyle}/>

<table class="table table-bordered table-striped table-responsive-md" id={contentStyle}>
<thead>
      <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Remark</th>
          <th>Reason for Absence</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E765</td>

         <td style={{textAlign:'center'}}></td>
         <td></td>
         <td></td>
         <td><Link to="/" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
<Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} />  </td>
     </tr>
     </tbody>
     </table>
      </div>
    );
  }
}
