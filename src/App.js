import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content'

class App extends Component {

  
  render() {
    let ex = 1
    const smallColumn = {
      width: '10%'
    }
    
    return (
      <div>
       <Content 
        value = {ex}
        />
        
      </div>
    );
  }
}

export default App;
