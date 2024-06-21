import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Darkbtn}>
   <DarkModeToggle></DarkModeToggle>
      </div>
    </div>
  )
}

export default Navbar
