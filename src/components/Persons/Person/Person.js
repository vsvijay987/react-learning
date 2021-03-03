import React from "react";
// import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.css';


const person = (props) => {

  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px',
  //   }
  // }

 
  return (
    <div className={classes.Person}>
  
      <p onClick = {props.click}>
        I'm a {props.name} and i'm {props.age} year old
      </p>
      <p>{props.children}</p>
      <input onChange = {props.change} value={props.name} />
   
    </div>
  );
};

export default person;
