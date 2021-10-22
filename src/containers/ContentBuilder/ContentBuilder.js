import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AddPost from "../Add/AddPosts/AddPosts";
import AddPostsAcademics from "../Add/AddPostsAcademics/AddPostsAcademics";
import Homescreen from "../HomeScreen/Homescreen";
import Events from "../Events/Events";

import AboutClubs from "../AboutClubs/aboutclubs";
import Aboutus from "../AboutUs/AboutUs";
import Faq from "../Faq/faq";
import Academics from "../Books/Subject";
import AcademicUse from "../Books/AcedemicUse";
import Contactus from "../ContactUs/contactus";
import AddNotes from "../Add/AddNotes/AddNotes";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import Timetable from "../Books/TimeTable/Timetable";
import AddBooks from "../Add/AddBooks/AddBooks";
import AddPapers from "../Add/AddPapers/AddPapers";
import AddNotesAdmin from "../Add/AddNotesAdmin/AdminNotesAdmin";

// for routing between different screens
export class ContentBuilder extends Component {
  constructor(props) {
    super();
  }
  render() {
    // console.log(this.props.theme);
    return (
      // Can select one path at once from the Side drawer
      <Switch>
        <Route path="/" exact component={Homescreen} />
        <Route path="/add-post" component={AddPost} />
        <Route path="/add-notes" component={AddNotes} />
        <Route path="/events" component={Events} />
        <Route path="/clubs" component={AboutClubs} />
        <Route path="/about" component={Aboutus} />
        <Route path="/faqs" component={Faq} />
        <Route path="/addbooksCS1479" component={AddBooks} />
        <Route path="/addpapersCS1479" component={AddPapers} />
        <Route path="/addpostsAcedemicsCS1479" component={AddPostsAcademics} />
        <Route path="/addnotesCS1479" component={AddNotesAdmin} />
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
        <Route path="/contact-us" component={Contactus} />
        <Route
          path="/academics/choose-path"
          component={(props) => <ErrorModal onclick={this.props.onclick} />}
        />
      </Switch>
    );
  }
}

export default ContentBuilder;
