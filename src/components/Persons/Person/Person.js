import React, { Component } from "react";
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and i'm {this.props.age} year old
        </p>
        <p>{this.props.children}</p>
        <input onChange={this.props.change} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
