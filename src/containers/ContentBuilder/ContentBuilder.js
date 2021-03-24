import React, { Component } from "react";
import AddPost from "../Add/AddThingsPage";
import Homescreen from '../HomeScreen/Homescreen';
import { Route } from 'react-router-dom';
import Oldpapers from '../Oldpapers/Oldpapers';
import Events from '../Events/Events'
import Notes from '../Notes/Notes'
import aboutclubs from '../AboutClubs/aboutclubs';
import aboutus from '../AboutUs/AboutUs';


export class ContentBuilder extends Component {
  render() {
    return (
      <div>

        <Route path="/" exact component={Homescreen} />
        <Route path="/old-papers" component={Oldpapers} />
        <Route path="/add-post" component={AddPost} />
        <Route path="/notes" component={Notes} />
        <Route path="/events" component={Events} />
        <Route path="/clubs" component={aboutclubs} />
        <Route path="/about" component={aboutus} />

      </div>
    );
  }
}

export default ContentBuilder;


