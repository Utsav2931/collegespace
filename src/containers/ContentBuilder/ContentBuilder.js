import React, { Component } from "react";
import Post from "../Post/Post";
import { Route } from 'react-router-dom';
import Oldpapers from '../Oldpapers/Oldpapers';

export class ContentBuilder extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Post}/>
        <Route path="/old-papers" component={Oldpapers}/>
      </div>
    );
  }
}

export default ContentBuilder;
