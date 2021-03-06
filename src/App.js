import React from "react";
import {Route} from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "./styles/App.scss";

import Home from "./pages/Home";
import CameraDemo from "./pages/CameraDemo";

function App() {
  return (
    <>
      <Route exact path="/demo">
        <CameraDemo/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
    </>
  );
}

export default App;
