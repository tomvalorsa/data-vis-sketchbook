import React, { Component } from 'react'
import cls from 'classnames'
import styles from './index.scss'

class Dot extends Component {
  handleClick = () => {
    const { setIdx, dotIdx } = this.props
    setIdx(dotIdx)
  }

  render() {
    const { active } = this.props

    const classes = [styles.dot]

    if (active) {
      classes.push(styles.active)
    }

    return <div className={cls(classes)} onClick={this.handleClick}></div>
  }
}

export default Dot
