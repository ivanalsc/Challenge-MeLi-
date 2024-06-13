"use client"
import {useState} from 'react';
import Image from "next/image";
import styles from "../../app/items/[id]/product.module.css";


export default function ImagesContainer({productInfo, pictures}){

    const [mainImage, setMainImage] = useState(productInfo.pictures[0].url);

    const handleThumbnails = (id) => {

        const match = (element) => element.id === id;

        const index = pictures.findIndex(match);

        setMainImage(pictures[index].url)
       
    }

    return(
        <div className={`${styles.productImgContainer} `}>
        <div className={`${styles.productThumbnails} `}>
          {pictures.slice(0,5).map((pic) => (
            <div key={pic.id} onMouseEnter={()=> handleThumbnails(pic.id)}>
                <Image  src={pic.url} width={50} height={50} alt={productInfo.title} />

            </div>
          ))}
        </div>
        <div className={styles.productImg}>
          <Image
            src={mainImage}
            width={500}
            height={500}
            alt={productInfo.title}
          />
        </div>
      </div>
    )
}