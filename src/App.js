import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import {SearchBox} from "./component/search-box/search-box.component"
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  onSearchChange = (event) => {};
  handleChange = (e) =>{
    this.setState({searchField : e.target.value});
   }
  render() {
    const {monsters, searchField}=this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1 className="title-app">Monster TeaZ</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange} />
        <CardList monsters={filterMonsters}>
 
        </CardList>
      </div>
    );
  }
}

export default App;
