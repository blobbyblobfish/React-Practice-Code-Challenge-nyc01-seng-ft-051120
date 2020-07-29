import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    selectionIndex: 0,
    eaten: [],
    wallet: 100
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(json => this.setState({sushis: json}))
  }

  // Set new money. Check that new sushi being eaten can be paid for
  // Add sushi to this.state.eaten
  eatSushi = (sushi) => {
    const newMoney = this.state.wallet - sushi.price

    if (newMoney > 0) {
      this.setState((prevState) => {
        return {
          eaten: [...prevState.eaten, sushi],
          wallet: newMoney
        }
      })
    }
  }

  more = () => {
    this.setState((prevState) => {
      return {selectionIndex: prevState.selectionIndex + 4}
    })

    if (this.state.selectionIndex + 4 === this.state.sushis.length) {
      this.setState({selectionIndex: 0})
    }
  }

  selectFourSushis = () => {
    return this.state.sushis.slice(this.state.selectionIndex, this.state.selectionIndex + 4)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} selectedSushis={this.selectFourSushis()} more={this.more} eatSushi={this.eatSushi}/>
        <Table eaten={this.state.eaten} money={this.state.wallet}/>
      </div>
    );
  }
}

export default App;