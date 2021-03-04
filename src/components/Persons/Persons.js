import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("Persons.js getDerivedStateFromProps", props);
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons.js shouldComponentUpdate");

    if(nextProps.persons !== this.props.persons) return true
    return false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js getSnapshotBeforeUpdate");
    return {message: 'snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Persons.js componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("Person.js rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.click(index)}
          key={person.id}
          change={(event) => this.props.change(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
