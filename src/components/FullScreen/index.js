import React from 'react'
import cls from 'classnames'
import styles from './index.scss'

const FullScreen = ({ children, backgroundColor, center = false }) => {
  const classes = [styles.fullScreen]

  if (center) {
    classes.push(styles.center)
  }

  return (
    <div className={cls(classes)} styles={{ backgroundColor }}>
      {children}
    </div>
  )
}

export default FullScreen
