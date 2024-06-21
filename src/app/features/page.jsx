import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const Features = () => {
    return (
        <div>
            <div className={styles.Container}>
                <div className={styles.Features1}>

                    <MenuBookSharpIcon className={styles.Icon} sx={{ fontSize: 80 }} ></MenuBookSharpIcon>
                    <h2 className={styles.head2}>BOOK WITH</h2>
                    <h1 className={styles.head1}>ONLY 20% </h1>

                </div>
                <div className={styles.Features2}>
                    <AccountBalanceIcon className={styles.Icon} sx={{ fontSize: 80 }}></AccountBalanceIcon>
                    <h2 className={styles.head2}>PAYMENT PLAN</h2>
                    <h1 className={styles.head1}>EASY 70/30</h1>
                </div>
                <div className={styles.Features3}>
                    <ThumbUpAltIcon className={styles.Icon} sx={{ fontSize: 80 }}></ThumbUpAltIcon>
                    <h2 className={styles.head2}>HANDOVER ON </h2>
                    <h1 className={styles.head1}>Q2 2027</h1>
                </div>

                <div className={styles.Features4}>
                    <HomeWorkIcon className={styles.Icon} sx={{ fontSize: 80 }}></HomeWorkIcon>
                    <h2 className={styles.head2}>AREA STARTS FROM</h2>
                    <h1 className={styles.head1}>700 SQMT</h1>
                </div>
            </div>
            <div className={styles.Heading}>HARBOUR <br />LIGHTS </div>
            <div className={styles.Heading2}>de GISOGONO</div>
            <div className={styles.Heading3}>GENEVE</div>

            <div className={styles.About}>
                <div className={styles.Title}>FEATURES AND AMENITIES</div>
                <div className={styles.Desc}>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront<br />
                    lifestyle. Its maritime inspired amenities provide an unmatched seaside experience,offering a<br />
                    life of tranquility and bliss
                </div>
            </div>
            <div className={styles.Display}>
                <div className={styles.ImgDisplay}>
                    <Image src="/pool.jpg" alt='img' width={200} height={200} className={styles.Img}></Image><br />
                    <div className={styles.Content}>
                        Floating <br />
                        Pools</div>
                </div>
                <div className={styles.ImgDisplay}>
                    <Image src="/cabin.jpeg" alt='img' width={200} height={200} className={styles.Img}></Image><br />
                    <div className={styles.Content}>
                        Spacious cabins <br />
                        like Rooms
                    </div>

                </div>
                <div className={styles.ImgDisplay}>
                    <Image src="/seapools.jpeg" alt='img' width={200} height={200} className={styles.Img}></Image><br />
                    <div className={styles.Content}>
                        Sea Facing<br />
                        Swimming Pools</div>
                </div>
                <div className={styles.ImgDisplay}>
                    <Image src="/gym.webp" alt='img' width={200} height={200} className={styles.Img}></Image><br />
                    <div className={styles.Content}>
                        Gymnasium<br />
                        &Fitness</div>
                </div>
            </div>
            <div className={styles.Button} translate>
                <button  data-theme="dark" url="/" className={styles.button1}>INTERIOR</button>
                <button data-theme="dark"url="/" className={styles.button2}>EXTERIOR</button>
            </div>
        </div>
    )
}
export default Features
