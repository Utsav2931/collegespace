import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AddPost from "../Add/AddThingsPage";
import Homescreen from "../HomeScreen/Homescreen";
import Oldpapers from "../Oldpapers/Oldpapers";
import Events from "../Events/Events";
import Notes from "../Notes/Notes";
import aboutclubs from "../AboutClubs/aboutclubs";
import aboutus from "../AboutUs/AboutUs";
import faq from "../Faq/faq";
import Academics from "../Books/Subject";
import AcademicUse from "../Books/AcedemicUse";
import contactus from '../ContactUs/contactus'
import AddNotes from "../Add/AddNotes/AddNotes";


export class ContentBuilder extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Homescreen} />
        <Route path="/add-post" component={AddPost} />
        <Route path="/add-notes" component={AddNotes} />
        <Route path="/events" component={Events} />
        <Route path="/clubs" component={aboutclubs} />
        <Route path="/about" component={aboutus} />
        <Route path="/faqs" component={faq} />
        {/* <Route path="/Academics" component={Books}/> */}
        <Route
          path="/Academics/cspit/ce/1/notes/:id"
          component={AcademicUse}
        />
        <Route
          path="/Academics/cspit/ce/1/paper/:id"
          component={AcademicUse}
        />
        <Route path="/Academics/cspit/ce/1/Books/:id" component={AcademicUse} />
        <Route path="/Academics/cspit/ce/1/:id" component={Academics} />
        <Route path="/contact-us" component={contactus} />
      </Switch>
    );
  }
}

export default ContentBuilder;
