import React, { Component } from "react";
import AddPost from "../Add/AddThingsPage";
import Homescreen from '../HomeScreen/Homescreen';
import { Route } from 'react-router-dom';
import Oldpapers from '../Oldpapers/Oldpapers';

export class ContentBuilder extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Homescreen}/>
        <Route path="/old-papers" component={Oldpapers}/>
        <Route path="/add-post" component={AddPost}/>
        
      </div>
    );
  }
}

export default ContentBuilder;


