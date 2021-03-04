import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

import WithClass from '../hoc/WithClass';

// import styled from "styled-components";
import classes from "../containers/App.css";
// import Radium, {StyleRoot} from 'radium';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   border: 1px solid blue;
//   padding: 6px;
//   cursor: pointer;
//   font: inherit;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {

  constructor(props){
    super(props);
    console.log('App.js in constructor');
  }

  state = {
    persons: [
      { id: "abcd", name: "Vijay", age: 24 },
      { id: "efgh", name: "Rohan", age: 14 },
      { id: "hijk", name: "Somu", age: 26 },
    ],
    otherState: "something",
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state){
    console.log("App.js getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount(){
    console.log("App.js compDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("App.js shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    console.log("App.js componentDidUpdate");
  }

  // componentWillmount(){
  //   console.log("App.js fromcomponentWillMount");
  // }



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

    console.log("App.js render");
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
          <Persons
            change={this.changeInputHandler}
            click={this.deletePersonHandler}
            persons={this.state.persons}
          />
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // }

      //working with css modules

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

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => this.setState({showCockpit: false})}>Remove cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title = {this.props.projectTitle}
          showPersons={this.state.showPersons}
          personslength={this.state.persons.length}
          toggle={this.togglePersonsHandler}
        /> : null}
        {persons}
      </WithClass>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', {}, 'Does it work now'));
}

export default App;
