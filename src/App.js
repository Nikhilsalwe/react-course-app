import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Nikhil", age: 28},
      {name: "Yogita", age: 10},
      {name: "Salwe", age: 10},
    ]
  }

  switchNameHandle = (name) => {
    this.setState({
      persons: [
        {name: name, age: 28},
         {name: "Yogita", age: 10},
         {name: "Umare", age: 10}
      ]
    })
  }

  nameChangedHandler= (event) => {
    this.setState({
      persons: [
        {name: "Nikhil", age: 28},
         {name: event.target.value, age: 10},
         {name: "Salwe", age: 10},
      ]
    })
  }
  render() {
    const style ={
      backgroundColor: 'Whilte',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi,I am React</h1>
        <p>This is really working</p>
        <button style={style} onClick={() => this.switchNameHandle("Umare")}>Switch Name</button>
        <Person click={this.switchNameHandle.bind(this, "Sawali")} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person changed={this.nameChangedHandler}  name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Sleeping</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
