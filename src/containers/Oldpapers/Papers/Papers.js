import React from "react";
import Paper from "./Paper/paper";

const persons = (props) =>
  props.persons.map((person) => {
    return (
      <div>
        <Paper title={person.title} year={person.year} desc={person.desc} key={person.id} />
      </div>
    );
  });

export default persons;
