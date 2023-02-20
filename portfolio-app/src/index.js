import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path ='/' element={<App></App>}>

      </Route>
    </Routes>
  </Router>,
  document.querySelector("#root")
);
