import React, { Component } from "react";
import EventFetch from './Event.js'
import './eventhome.css'
import firebase from "../../config/config";
import BasicPadding from "../../components/UI/BasicCompPadding/BasicLayout";

const db = firebase.firestore();

export class Events extends Component {
  state = {
    events: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    db.collection("events")
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

  render() {
    return (
      // <div className={classes.OuterDiv}>
      <BasicPadding>
        <div >
          <center><h1 className="contentHead3">Events</h1></center>
          {this.state.isLoaded ? <EventFetch events={this.state.events} /> : ""}
        </div>
      </BasicPadding>

      // </div>
    );
  }
}

export default Events;


