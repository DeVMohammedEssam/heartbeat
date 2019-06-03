import React, { Component } from 'react';
import Home from "./components/Home";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { login } from "./redux/actions/user";
import openSocket from "socket.io-client"
import {url} from "./config"
class App extends Component {
 constructor(props){
   super(props)
  let socket=new openSocket("http://127.0.0.1/5000");
  
   socket.on('connection', function(socket){
    console.log("SOCKET ",socket.id)
});
 }
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
