import React from "react";
import {Link} from "react-router-dom";
import {displayContainer} from "../Layout.css";
import {Marketing} from "./Marketing";
import {InformationTechnology} from "./InformationTechnology";
import {Finance} from "./Finance";


export class DepartmentsPage extends React.Component{
  constructor(props) {
    super(props);
    this.marketing=this.marketing.bind(this);
    this.it=this.it.bind(this);
    this.finance=this.finance.bind(this);
    this.state = {
      marketing:false,
      informationtechnology:false,
      finance:false
    };
  }
  displaydepartment1(){
    if(this.state.marketing){
      return(
        <div>
        <Marketing/>
        </div>
      );
    }
  }
  displaydepartment2(){
    if(this.state.it){
      return(
        <div>
        <InformationTechnology/>
        </div>
      );
    }
  }
  displaydepartment3(){
    if(this.state.finance){
      return(
        <div>
        <Finance/>
        </div>
      );
    }
  }
  marketing(){
    this.setState({
marketing:!this.state.marketing
    });
  }
  it(){
    this.setState({
it:!this.state.it
    });
  }
finance(){
    this.setState({
finance:!this.state.finance
    });
  }

  render(){
    var marketing=this.displaydepartment1();
    var it=this.displaydepartment2();
    var finance=this.displaydepartment3();
    return(
      <div className={displayContainer}>
      DepartmentsPage
      <div class="dropdown">
        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Department
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item"><span onClick={this.marketing.bind(this)} style={{cursor:'pointer'}}>Marketing</span></a>
          <a class="dropdown-item"><span onClick={this.it.bind(this)} style={{cursor:'pointer'}}>Information Technology</span></a>
          <a class="dropdown-item"><span onClick={this.finance.bind(this)} style={{cursor:'pointer'}}>Finance</span></a>
        </div>
      </div>

      {marketing}
      {it}
      {finance}

      </div>
    );
  }
}
