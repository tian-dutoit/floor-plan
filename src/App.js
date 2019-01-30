import React, { Component } from 'react'
import './App.css'
import { Homepage } from './components/Homepage'
import Pricing from './components/Pricing'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Homepage /> */}
        <Pricing />
      </div>
    )
  }
}

export default App
