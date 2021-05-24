/** @format */

import { Button } from "bootstrap";
import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement=()=>{
      console.log("increment clicked", this)
      this.setState({count:this.state.count +1})
  }

  render(){
      return(
      <div>
          <span className ={this.getBadgeClasses()}>{this.formatCount()}</span>
      
      <Button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
          >
              Increment
          </Button>
          </div>
          )
     
  }
}

export default Counter;
