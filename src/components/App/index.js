import React, { Component } from 'react'
import FullScreen from '../FullScreen'
import Sketchbook from '../Sketchbook'

class App extends Component {
  render() {
    return (
      <FullScreen>
        <Sketchbook />
      </FullScreen>
    )
  }
}

export default App
