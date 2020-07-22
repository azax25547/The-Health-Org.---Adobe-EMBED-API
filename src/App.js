import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import One from "./components/one";
import Three from "./components/three";
import Five from "./components/five";
import Four from "./components/four";
import Two from "./components/two";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/survey-one" component={One} />
        <Route path="/survey-two" component={Two} />
        <Route path="/survey-three" component={Three} />
        <Route path="/survey-four" component={Four} />
        <Route path="/survey-five" component={Five} />
      </Router>
    </>
  );
}

export default App;
