/** @format */

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    //imageUrl: 'https://picsum.photos/200/300'
    tags: [],
  };
//   styles = {
//     fontSize: 50,
//     fontWeight: "bold",
//   };

  render() {
    return (
      //    <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="Random Images" /> */}
        {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span> */}
        {/* <span style={{fontSize:30}} className="badge badge-warning m-2">{this.formatCount()}</span> */}
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>*/}
        {/* <ul> 
          <li>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </li>
        </ul> */}
        <div>{this.renderTags()}</div>;
      //    </React.Fragment>
    );
  }

//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero" : count;
//   }

renderTags() {
    if (this.state.tags.lenght === 0) return <p>There are no tags! </p>;
    return<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
}
}

export default Counter;
