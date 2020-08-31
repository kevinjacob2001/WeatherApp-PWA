import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
      super()
     
  }
  state={
    value:"",
    info:[]
}

handleChange=(e)=>{this.setState({value:e.target.value})}

handleSubmit=async(e)=>{
  e.preventDefault();
const API_KEY="ea5f0bd6a1160a597e4bd4cca046ca66";
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}&units=metric`)
const data=await response.json();
this.setState({info:data})
console.log(this.state.info)
}
    
    render(){
        return(
            <div className="main-container">
              <form onSubmit={this.handleSubmit}>
              <input type="text" className="search" placeholder="search" onChange={this.handleChange} value={this.state.value} />
            
             </form>
           {this.state.info.main&&(
             <div className="city">
<h2 className="city-name">
           <span>{this.state.info.name}</span>
           <sup>{this.state.info.sys.country}</sup>
         
            </h2>
            <div className="city-temp">
            {Math.round(this.state.info.main.temp)}
            <sup>&deg;C</sup>
            </div>

            <div className="info">
              <img className="city-info" src={`https://openweathermap.org/img/wn/${this.state.info.weather[0].icon}@2x.png`} alt={this.state.info.weather[0].description} />
            <p>{this.state.info.weather[0].description}</p>
            </div>

             </div>
           )}

            </div>
        )
    }
}

export default App;
