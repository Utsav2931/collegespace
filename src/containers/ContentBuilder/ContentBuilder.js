import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AddPost from "../Add/AddThingsPage";
import Homescreen from '../HomeScreen/Homescreen';
import Oldpapers from '../Oldpapers/Oldpapers';
import Events from '../Events/Events'
import Notes from '../Notes/Notes'
import aboutclubs from '../AboutClubs/aboutclubs';
import aboutus from '../AboutUs/AboutUs';
import faq from '../Faq/faq';
import contactus from '../ContactUs/contactus'


export class ContentBuilder extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Homescreen} />
        <Route path="/old-papers" component={Oldpapers} />
        <Route path="/add-post" component={AddPost} />
        <Route path="/notes" component={Notes} />
        <Route path="/events" component={Events} />
        <Route path="/clubs" component={aboutclubs} />
        <Route path="/about" component={aboutus} />
        <Route path="/faqs" component={faq} />
        <Route path="/contact-us" component={contactus} />
      </Switch>

    );
  }
}

export default ContentBuilder;


