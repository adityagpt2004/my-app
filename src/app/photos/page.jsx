import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';

const Photos = () => {
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.LargeImg}>
          <Image src="/largeimg.jpg" alt='img' width={1400} height={600} className={styles.Img}></Image>
        </div>
        <div className={styles.SmallImg}>

          
            <div className={styles.SmallImg1}>
              <Image src="/smallimg1.webp" alt='img' width={310} height={180} className={styles.SImg}></Image>
            </div>
            <div className={styles.SmallImg1}>
              <Image src="/smallimg2.webp" alt='img' width={310} height={180} className={styles.SImg}></Image>
            </div>

         
            <div className={styles.SmallImg1}>
              <Image src="/smallimg3.jpeg" alt='img' width={310} height={180} className={styles.SImg}></Image>
            </div>
            <div className={styles.SmallImg1}>
              <Image src="/smallimg4.jpeg" alt='img' width={310} height={180} className={styles.SImg}></Image>
            </div>
          

        </div>
      </div>
    </div>
  )
}

export default Photos
