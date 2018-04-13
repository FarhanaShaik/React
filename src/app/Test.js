import React from "react";
import Icon from "react-icons-kit";
import {Card,CardText} from "reactstrap";
import {holidayTextR,holidayTitleR,holidayDayR} from "./home/Home.css";
import { plusSquareO,minusSquareO } from 'react-icons-kit/fa';
import {carousel,right,labelStyle1,inputstyle} from "./Layout.css";


import {displayContainer,contentStyle1,orange,tableinput,item,indicator,square,exampletable} from "./Layout.css";


export class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      components:false
    };
  }
  next(){
    this.setState({
  components:!this.state.components
    });
  }

  displaycomponents(){
    if(components){

    }
  }
  render() {
    var components=displaycomponents();
    return(
      <div className={displayContainer}>


      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Annual CTC</label>
          <input type="text" class="form-control"  id={tableinput} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Monthly CTC</label>
          <input type="text" class="form-control" id={tableinput} placeholder="" />
        </div>

        <form class="form-inline">
   <div class="form-group">
   <label for="inputPassword6">Salary Break up</label>
   <button class="btn btn-outline-warning" onClick={this.next.bind(this)}>Manual</button>
   <button class="btn btn-outline-warning" onClick={this.next.bind(this)}>Auto</button>

   </div>

   </form>
   </div>
      <table class="table table-responsive-md" id={contentStyle1}>
      <thead>
          <tr style={{backgroundColor:'#496FA0',color:'white',textAlign:'center'}}>
                <th>Components</th>
                <th>Monthly</th>
                <th>Annually</th>
                <th>Curency</th>
                <th>Component Type</th>
                <th></th>

            </tr>
        </thead>
        <tbody>

           <tr>
               <td id={tableinput} ><input type="text" placeholder="Basic Pay" class="form-control" /></td>
               <td id={tableinput}><input type="text" placeholder="5,000" class="form-control" /></td>
               <td id={tableinput}><input type="text" placeholder="60,000" class="form-control" /></td>
               <td id={tableinput}><select class="form-control" >
               <option>INR-INDIA</option>
               </select></td>
               <td id={tableinput}><select class="form-control" >
               <option>EARNINGS</option>
               </select></td>
               <td>    <Icon icon={minusSquareO} className={square}/>    </td>
           </tr>
           <tr>
               <td id={tableinput} ><input type="text" placeholder="PF" class="form-control" /></td>
               <td id={tableinput}><input type="text" placeholder="1,000" class="form-control" /></td>
               <td id={tableinput}><input type="text" placeholder="12,000" class="form-control" /></td>
               <td id={tableinput}><select class="form-control" >
               <option>INR-INDIA</option>
               </select></td>
               <td id={tableinput}><select class="form-control" >
               <option>DEDUCTIONS</option>
               </select></td>
               <td>  <Icon icon={plusSquareO} className={square}/>  </td>

           </tr>
           <tr style={{position:'relative',top:'3vw'}}>
           <td>Total CTC</td>
           <td id={tableinput}><input type="text" placeholder="4,000" class="form-control" /></td>
           <td id={tableinput}><input type="text" placeholder="48,000" class="form-control" /></td>
           <td></td>
 <td></td>
           <td className={right}><button class="btn  btn-outline-warning">Save</button></td>

           </tr>
           </tbody>
           </table>
           <div class="form-row">
             <div class="col-md-3 mb-3">
               <label className={labelStyle1}>Annual CTC</label>
               <input type="text" class="form-control"  id={tableinput} placeholder=""/>
             </div>
             <div class="col-md-3 mb-3">
               <label className={labelStyle1}>Monthly CTC</label>
               <input type="text" class="form-control" id={tableinput} placeholder="" />
             </div>

             <form class="form-inline">
   <div class="form-group">
     <label for="inputPassword6">Salary Break up</label>
     <input type="text" id={tableinput} class="form-control" aria-describedby="passwordHelpInline"/>
   </div>

 </form>
   </div>
           <table class="table table-bordered table-responsive-md" id={contentStyle1}>
           <thead>
               <tr style={{backgroundColor:'#496FA0',color:'white',textAlign:'center'}}>
                     <th>Salary & Allowances</th>
                     <th>Per Month</th>
                     <th>Annual</th>
                 </tr>
             </thead>
             <tbody>
                <tr style={{textAlign:'center',color:'gray'}}>
                    <td>Basic Salary</td>
                    <td>11,250</td>
                    <td>1,35,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'gray'}}>
                    <td>House Rent Allowance</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'gray'}}>
                    <td>Lunch Allowance</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'gray'}}>
                    <td>Conveyance Allowance</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'gray'}}>
                    <td>Medical</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'gray'}}>
                    <td>Personal Pay</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'gray'}}>
                    <td>Other Allowance</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'black',backgroundColor:'#EFF9FC'}}>
                    <td>Total Earnings</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'gray'}}>
                    <td>Provident Fund</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'gray'}}>
                    <td>ESI</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'black',backgroundColor:'#EFF9FC'}}>
                    <td>Total Deductions</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'black',backgroundColor:'#EFE4B0'}}>
                    <td>Total Pay</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                <tr style={{textAlign:'center',color:'black',backgroundColor:'#7092BE'}}>
                    <td>Cost To Company(CTC)</td>
                    <td>4,000</td>
                    <td>48,000</td>
                </tr>
                </tbody>
                </table>
      </div>
    );
  }
}
