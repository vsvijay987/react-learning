import React, { Component } from "react";
import Person from "./Person/Person";
import styled from "styled-components";
import "./App.css";
// import Radium, {StyleRoot} from 'radium';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  border: 1px solid blue;
  padding: 6px;
  cursor: pointer;
  font: inherit;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "abcd", name: "Vijay", age: 24 },
      { id: "efgh", name: "Rohan", age: 14 },
      { id: "hijk", name: "Somu", age: 26 },
    ],
    otherState: "something",
    showPersons: false,
  };

  // console.log(personState, otherState);

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  changeInputHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.obtain({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const toggleShow = this.state.showPersons;
    this.setState({ showPersons: !toggleShow });
  };

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   border: '1px solid blue',
    //   padding: '6px',
    //   cursor: 'pointer',
    //   font: 'inherit',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    //   }
    // }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                change={(event) => this.changeInputHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // }

      // <div>
      //     <Person
      //       name={this.state.persons[0].name}
      //       age={this.state.persons[0].age}
      //     />
      //     <Person
      //       name={this.state.persons[1].name}
      //       age={this.state.persons[1].age}
      //       click={this.switchNameHandler.bind(this, 'rakesh')}
      //       change={this.changeInputHandler}
      //     >
      //       Hello world
      //     </Person>
      //     <Person
      //       name={this.state.persons[2].name}
      //       age={this.state.persons[2].age}
      //     />
      //   </div>
    }

    let classes = [];

    if (this.state.persons.length <= 2) classes.push("red");
    if (this.state.persons.length <= 1) classes.push("bold");

    return (
      <div className="App">
        <h1>Hi i'm React App</h1>
        <p className={classes.join(" ")}>this is working fine</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          toggle persons
        </StyledButton>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Does it work now'));
}

export default App;
