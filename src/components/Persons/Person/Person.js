import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";
import AuthContext from '../../../context/auth-context';
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Auxiliary>
        <AuthContext.Consumer>
          {(context) => context.authenticated ?<p>Authenticated</p> : <p>Please Login</p>}
        </AuthContext.Consumer>
        
        <p onClick={this.props.click}>
          I'm a {this.props.name} and i'm {this.props.age} year old
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl) => this.inputElement = inputEl}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
  click: PropTypes.func,
};

export default withClass(Person, classes.Person);
