import React from "react";
// import Radium from 'radium';
import styled from 'styled-components';
// import './Person.css';
const StyledDiv = styled.div`
  
    width: 50%;
    margin: 15px auto;
    padding: 15px;
    border: 2px solid rgba(10, 6, 6, 0.667);
    box-shadow: 10px 3px rgb(138, 125, 125);
    text-align: center;

    @media (min-width: 500px) {
      width: 450px;
    }
`;


const person = (props) => {

  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px',
  //   }
  // }

  
  

  return (
    <StyledDiv>
  
      <p onClick = {props.click}>
        I'm a {props.name} and i'm {props.age} year old
      </p>
      <p>{props.children}</p>
      <input onChange = {props.change} value={props.name} />
   
    </StyledDiv>
  );
};

export default person;
