import React, { Component } from 'react';
import CardList from '../components/pages/CardList/CardList';
import SearchBox from '../components/shared/SearchBox/SearchBox';
import './App.scss';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this);
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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      (monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );

    return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange= { this.handleChange }
      />
      <CardList monsters= {filteredMonsters}>
      </CardList>
    </div>
    );
  }
}

export default App;
