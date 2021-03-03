import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = '';

  if(props.showPersons){
      btnClass = classes.Red;
  }

  if (props.persons.length <= 2) assignedClasses.push(classes.red);
  if (props.persons.length <= 1) assignedClasses.push(classes.bold);
  return (
    <div className={classes.Cockpit}>
      <h1>Hi i'm React App</h1>
      <p className={assignedClasses.join(" ")}>this is working fine</p>
      <button className={btnClass} onClick={props.toggle}>
        toggle persons
      </button>
    </div>
  );
};

export default cockpit;
