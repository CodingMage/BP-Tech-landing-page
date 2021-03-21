import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../Pages/landing";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route path="/cart" component={Cart} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
