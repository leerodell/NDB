import React, { Component } from 'react';
import './App.css';


import News from './components/News';
import ToDoList from './components/ToDoList';
import TechNews from './components/TechNews';
import Image from './components/Image'



class App extends Component {


  render() {
    return (
      <div className="App">
       <ToDoList/><br/>
      <div className="news">
      <News/>
      <p className="space"/>
      <TechNews/>
      </div>
      <div className='image'>
      <Image myImage={'https://http.cat/100'}/>
      <Image myImage={'https://http.cat/200'}/>
      </div>
      </div>
    );
  }
}

export default App;
