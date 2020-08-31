import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
      super()
      this.state={
          value:"",
          info:[]
      }
  }

handleChange=(e)=>{this.setState({value:e.target.value})}

handleSubmit=async(e)=>{
  e.preventDefault();
const API_KEY="ea5f0bd6a1160a597e4bd4cca046ca66";
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}&units=metric`)
const data=await response.json();
this.setState({info:data.main})
console.log(this.state.info)
}
    
    render(){
        return(
            <div className="main-container">
              <form onSubmit={this.handleSubmit}>
              <input type="text" className="search" placeholder="search" onChange={this.handleChange} value={this.state.value} />
             <button className="btn" onClick={this.handleSubmit}>Find weather!</button>
             </form>
           
            </div>
        )
    }
}

export default App;
