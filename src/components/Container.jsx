import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Weather from "./Weather";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="container-xl">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Weather" element={<Weather />} />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
