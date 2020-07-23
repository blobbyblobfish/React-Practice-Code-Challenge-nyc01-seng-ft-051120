import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    table: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(json => this.setState({sushis: json}))
  }

  eatSushi = (sushi) => {
    this.setState((prevState) => {
      return {table: prevState.table, sushi}
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi}/>
        <Table table={this.state.table} />
      </div>
    );
  }
}

export default App;