import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AddPost from "../Add/AddPosts/AddPosts";
import Homescreen from "../HomeScreen/Homescreen";
import Events from "../Events/Events";
import aboutclubs from "../AboutClubs/aboutclubs";
import aboutus from "../AboutUs/Aboutus";
import faq from "../Faq/faq";
import Academics from "../Books/Subject";
import AcademicUse from "../Books/AcedemicUse";
import contactus from "../ContactUs/contactus";
import AddNotes from "../Add/AddNotes/AddNotes";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import Timetable from "../Books/TimeTable/Timetable";

export class ContentBuilder extends Component {
  constructor(props) {
    super();
  }
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

        <Route
          path={`/Academics/${this.props.college}/${this.props.department}/${this.props.semester}/notes/:id`}
          component={AcademicUse}
        />
        <Route
          path={`/Academics/${this.props.college}/${this.props.department}/${this.props.semester}/paper/:id`}
          component={AcademicUse}
        />
        <Route
          path={`/Academics/${this.props.college}/${this.props.department}/${this.props.semester}/Books/:id`}
          component={AcademicUse}
        />
        <Route
          path={`/Academics/:id/:id/:id/:id/:id`}
          component={AcademicUse}
        />

        <Route
          path={`/Academics/${this.props.college}/${this.props.department}/${this.props.semester}/timetable`}
          component={Timetable}
        />
        <Route
          path={`/Academics/${this.props.college}/${this.props.department}/${this.props.semester}/:id`}
          component={Academics}
        />
        <Route path={`/Academics/:id/:id/:id/:id`} component={Academics} />
        <Route path="/contact-us" component={contactus} />
        <Route
          path="/academics/choose-path"
          component={(props) => <ErrorModal onclick={this.props.onclick} />}
        />
      </Switch>
    );
  }
}

export default ContentBuilder;
