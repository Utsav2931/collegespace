import React, { Component } from "react";
import EventFetch from "./Event.js";
import "./eventhome.css";
import firebase from "../../config/config";
import BasicPadding from "../../components/UI/BasicCompPadding/BasicLayout";
const db = firebase.firestore();

export class Events extends Component {
  // State of the page
  state = {
    events: [],
    isLoaded: false,
  };

  // Execute this function first when the screens loads
  componentDidMount() {
    this.getEvents();
  }

  // gets the events from the database and store it in a state object, "enents"
  getEvents = () => {
    db.collection("events")
      .limit(8)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allArticals = [];

          // store each data in local array, "allArticals"
          docs.forEach(function (doc) {
            const artical = {
              id: doc.id,
              ...doc.data(),
            };
            allArticals.push(artical);
          });

          // set this all data to the state
          this.setState(
            {
              events: allArticals,
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
  // render the UI
  render() {
    return (
      <BasicPadding>
        <h1 className="contentHead3">Events</h1>
        {this.state.isLoaded ? <EventFetch events={this.state.events} /> : ""}
      </BasicPadding>
    );
  }
}

export default Events;
