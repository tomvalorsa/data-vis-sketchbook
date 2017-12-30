import React, { Component } from 'react'
import styles from './index.scss'

import Sketchbook from '../Sketchbook'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Data vis sketchbook</h1>
        <Sketchbook />
      </div>
    )
  }
}

export default App
