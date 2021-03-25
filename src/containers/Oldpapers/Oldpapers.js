import React, { Component } from "react";
import Papers from "./Papers/Papers";
import TitleComp from '../../components/UI/TitleComp/Titlecomp';
import firebase from '../../config/config';
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";

const db = firebase.firestore();


class Oldpapers extends Component {
    state = {
      persons: [],
      isLoaded: false,
    };

  componentDidMount() {
    this.getPapers();
  }

  getPapers = () => {
    db.collection("papers")
      .limit(8)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allArticals = [];
          docs.forEach(function (doc) {
            const artical = {
              id: doc.id,
              ...doc.data(),
            };
            allArticals.push(artical);
          });

          this.setState(
            {
              persons: allArticals,
            },
            () => {
              this.setState({
                isLoaded: true,
              });
            }
          );
        }
      });
  };

  render() {
    console.log(this.state.persons);
    return (
      <BasicLayout>
        <TitleComp title="Previous year's papers"/>
        {this.state.isLoaded ? <Papers
          persons={this.state.persons}
        ></Papers> : ""}
      </BasicLayout>
    );
  }
}

export default Oldpapers;
