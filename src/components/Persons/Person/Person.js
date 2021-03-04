import React, { Component } from "react";
import Auxiliary from '../../../hoc/Auxiliary';
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from "./Person.css";
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render() {
    return (
      <Auxiliary>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and i'm {this.props.age} year old
        </p>
        <p>{this.props.children}</p>
        <input onChange={this.props.change} value={this.props.name} />
      </Auxiliary>
    );
  }
}

export default withClass(Person, classes.Person);
