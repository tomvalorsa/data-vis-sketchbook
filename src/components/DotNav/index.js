import React from 'react'
import styles from './index.scss'

const DotNav = ({ children }) => (
  <div className={styles.dotNav}>
    {children}
  </div>
)

export default DotNav
