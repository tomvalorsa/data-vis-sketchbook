import React, { Component } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { Sketches } from '../../const'
import styles from './index.scss'

import DotNav from '../DotNav'
import Dot from '../Dot'

class Sketchbook extends Component {
  state = {
    idx: 0
  }

  componentDidMount() {
    addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount() {
    removeEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = (e) => {
    const { idx } = this.state
    // Left
    if (e.keyCode === 37 && idx > 0) {
      this.cycleLeft()
    }
    // Right
    if (e.keyCode === 39 && idx < (Sketches.length - 1)) {
      this.cycleRight()
    }
  }

  setIdx = (idx) => {
    this.setState({ idx })
  }

  cycleLeft = () => {
    const { idx } = this.state
    const newIdx = (idx - 1) < 0 ? Sketches.length - 1 : idx - 1
    this.setIdx(newIdx)
  }

  cycleRight = () => {
    const { idx } = this.state
    const newIdx = (idx + 1) % Sketches.length
    this.setIdx(newIdx)
  }

  render() {
    const { idx } = this.state

    const Sketch = Sketches[idx].component

    const leftDisplay = idx > 0 ? 'block' : 'none'
    const rightDisplay = idx < (Sketches.length - 1) ? 'block' : 'none'

    // Can add in any useful props for Sketch in render below

    return (
      <div className={styles.sketchbook}>
        <ChevronLeft
          className={styles.left}
          size={48}
          color="#fff"
          style={{ display: leftDisplay }}
          onClick={this.cycleLeft}
        />
        <ChevronRight
          className={styles.right}
          size={48}
          color="#fff"
          style={{ display: rightDisplay }}
          onClick={this.cycleRight}
        />

        <Sketch />
        
        <DotNav>
          {Sketches.map((sketch, i) => (
            <Dot
              key={sketch.key}
              title={sketch.title}
              setIdx={this.setIdx}
              dotIdx={i}
              active={i === idx}
            />
          ))}
        </DotNav>
      </div>
    )
  }
}

export default Sketchbook
