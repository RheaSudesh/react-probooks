import './App.css';
import React, { Component } from "react";
import HomeComponent from './component/HomeComponent';
import axios from 'axios';

class App extends Component{
  constructor()
  {
        super();
        this.state={
            booksList:[]
        }
  }

  componentDidMount=()=>{
      const api = "https://reactnd-books-api.udacity.com/books"
      let token= localStorage.token
      if(!token){
        token = localStorage.token =Math.random().toString(36).substr(-8)
      }
      const headers = {
      'Accept': 'application/json',
      'Authorization': token
      }
      axios.get(api,{headers})
      .then((response)=>{
          this.setState({booksList:response.data.books})
      })
      .catch((error)=>console.log(error));
  }
  
  

  render()
  {
      console.log(this.state.booksList);
      return (
        <HomeComponent booksList={this.state.booksList} />
      );
  }
}

export default App;