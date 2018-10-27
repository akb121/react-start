import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ajay'
    }
    this.changeName = this.changeName.bind(this);
  }

  changeName() {
    let { name } = this.state;
    name = (name === 'ajay') ? 'bidyut' : 'ajay';
    this.setState({
      name,
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeName}>Change Name</button>
        My name is {this.state.name}
      </div>
    );
  }
}

export default App;
