import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";

const ConsolesPage = ()=>(
  <div>
    <h1>Consoles</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/consoles" component={ConsolesPage} />
      </Switch>
    </div>
  );
}

export default App;
