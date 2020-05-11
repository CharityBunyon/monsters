import React, { Component } from 'react';
import CardList from '../components/pages/CardList/CardList';
import './App.scss';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  searchMonsters = (e) => {
    e.preventDefault();
    this.setState({ searchField: e.target.value });
  };


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      (monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );

    return (
    <div className="App">
      <input
      type='search'
      placeholder='search monsters'
      value= {searchField}
      onChange={this.searchMonsters}
      />
      <CardList monsters= {filteredMonsters}>
      </CardList>
    </div>
    );
  }
}

export default App;
