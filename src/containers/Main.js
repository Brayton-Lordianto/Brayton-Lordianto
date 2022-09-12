import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
export default class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
