import React from "react";
import Paper from "./Paper/paper";

const persons = (props) =>
  props.persons.map((person) => {
    return (
      <div>
        <Paper name={person.name} age={person.age} key={person.id} />
      </div>
    );
  });

export default persons;
