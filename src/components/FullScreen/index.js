import React from 'react'
import cls from 'classnames'
import styles from './index.scss'

const FullScreen = ({ children, center = false }) => {
  const classes = [styles.fullScreen]

  if (center) {
    classes.push(styles.center)
  }

  return (
    <div className={cls(classes)}>
      {children}
    </div>
  )
}

export default FullScreen
