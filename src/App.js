import React, { Component } from 'react';
import './App.css';

class App extends Component{
    
  fetchWeather=async(query)=>{
   
const API_KEY="ea5f0bd6a1160a597e4bd4cca046ca66";
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
const data=await response.json();
console.log(data)

  }
    
    render(){
        return(
            <div className="main-container">
              <input className="search" placeholder="search" value={} onChange={}/>
            </div>
        )
    }
}

export default App;
