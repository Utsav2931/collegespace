import React, { Component } from "react";
import classes from "./Oldpapers.module.css";
import Papers from "./Papers/Papers";
import TitleComp from '../../components/UI/TitleComp/Titlecomp';

class Oldpapers extends Component {
  state = {
    persons: [
      { id: "fwfw", name: "Theory of computation - ", age: "May 2012" },
      { id: "efwgw", name: "Theory of computation - ", age: "May 2013" },
      { id: "qeqwr", name: "Theory of computation - ", age: "May 2014" },
      { id: "qeqr", name: "Theory of computation - ", age: "May 2015" },
      { id: "qeqwr", name: "Theory of computation - ", age: "May 2016" },
      { id: "qeqqqr", name: "Theory of computation - ", age: "May 2018" },
      { id: "qeqqqr", name: "Theory of computation - ", age: "May 2019" },
      { id: "qeqqqr", name: "Theory of computation - ", age: "May 2020" },
    ],
    showPerson: false,
  };

  render() {
    return (
      <div>
        <TitleComp title="Previous year's papers"/>
        <Papers
          persons={this.state.persons}
        ></Papers>
      </div>
    );
  }
}

export default Oldpapers;
