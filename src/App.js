import React, { Component } from 'react';
import Home from "./components/Home";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import { login } from "./redux/actions/user";
import openSocket from "socket.io-client"
import {url} from "./config"
import {connect} from "react-redux"
import {addNotification} from "./redux/actions/index"
class App extends Component {
 constructor(props){
  
   super(props)
    this.state={
     user:""
   }
 


 }

 componentDidMount(){
    let socket=openSocket("http://localhost:8080",{ secure: true });
      socket.on("test",(data)=>{
        if(data.email==this.state.user.email)
          this.props.dispatch(addNotification(data));
        console.log(data)
      })
 }
 static getDerivedStateFromProps(props, state){
   if(state!=props){
     console.log(props)
     return {user:props.user}
   }
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
const mapStateToProps=(state)=>({
  user:state.user
})
export default connect(mapStateToProps)(App);
