import React, { Component } from "react";
// import Layout from "./Components/Layouts/Layout";
import Home from "./Containers/Home";
import Head from "./Components/Layouts/Head";

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Home />
      </div>
    );
  }
}

export default App;
