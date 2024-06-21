"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Features from "./features/page";
import Photos from "./photos/page";



// import Button from "@/components/Button/Button";

// const [change , setchange] = useState(0);
export default function Home() {
  return (

    <div>
      <div className={styles.imgContainer}>
        <Image src="/burj.jpg" alt="image" width={1500} height={750} className={styles.img}></Image>
        <Image src="/logo.png" alt="logo" className={styles.logo} width={250} height={100}></Image>
        <button url="/" className={styles.button}>ENQUIRE NOW</button>
        <div className={styles.imgText} >
          <h1>HARBOUR LIGHTS <br />
            DE GRESOGONO
          </h1>
          <h2>1,2 & 3 Bedrooms Seaside Apartments<br />
            in Dubai Maritime city
          </h2>
        </div>
        <div className={styles.imgText2}>
          <h3>PRICE STARTS FROM</h3>
          <h1>$ 425,000</h1>
          <h2>AED MILLION</h2>
          {/* <Button url="/" text="Get a Presentation" className={styles.btn}></Button> */}
          <button url="/" className={styles.btn}>GET A PRESENTATION</button>
          <div className={styles.insideText}>Get an Experts Presentation Of Real Estate in Dubai for Life and Investment</div>
        </div>
        <div className={styles.imgText3}>Rentals return of UPTO 11%**</div>
        <div className={styles.imgText4}>Capital Appreciation of UPTO 32%**</div>
      </div>

      <div>
        <Features></Features>
      </div>
      <div>
        <Photos></Photos>
      </div>
    </div>
  );
}
