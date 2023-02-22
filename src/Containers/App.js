import React from 'react';
import './App.css';
import { robots } from './robots';
import Header from '../Components/Header';
import CardList from '../Components/CardList';

class App extends React.Component{
  constructor(){
    super() 
    this.state = {
      robots : robots,
      searchField : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({
      searchField : event.target.value
    })
  }
  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    console.log(filteredRobots);
    return (
      <div className="App">
        <div className="header">
          <h1>ROBO FRIENDS</h1>
          <Header searchChange={this.onSearchChange}/>
        </div>
        <div className="cards">

          <CardList robots={filteredRobots}/>

        </div>
      </div>
    );
  }
 
}

export default App;
