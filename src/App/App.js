import React, { Component } from 'react';
import './App.scss';


class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello Charity',
    };
  }

  render() {
    return (
    <div className="App">
      <p>{this.state.string}</p>
        <button onClick = {() => this.setState({ string: 'Hello Lovely' })} className="btn btn-danger">Change Text</button>
    </div>
    );
  }
}
export default App;
