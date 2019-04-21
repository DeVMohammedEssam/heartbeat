import React, { Component } from 'react';
import Home from "./components/Home";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { login } from "./redux/actions/user";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
