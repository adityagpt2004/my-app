import React from 'react'
import styles from "./Footer.module.css";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className={styles.Container}>
      <CopyrightIcon></CopyrightIcon>
        DAMAC copyright 2024 All rights reserved
     
    </div>
  )
}

export default Footer
