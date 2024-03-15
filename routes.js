import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChickenGenerator from '/chickengenerator.js'; // Import your component

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="components/chickengenerator.js">
          <ChickenGenerator />
        </Route>
        {/* Add more routes here if needed */}
      </Switch>
    </Router>
  );
};

export default Routes;
