import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
export default class Main extends Component {
  render() {
    return (
      // make width 10%
      <div style={{ width: "100%" }}>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Home theme={this.props.theme} />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
