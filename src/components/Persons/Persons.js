import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    console.log("Person.js rendering...");
    return (
      
        <Person
          name={person.name}
          age={person.age}
          click={() => props.click(index)}
          key={person.id}
          change={(event) => props.change(event, person.id)}
        />
     
    );
  })

  export default persons;