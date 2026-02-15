import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";


export default function Loader(){
  const t = useTranslations();
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.loader}></div>
        <Image 
        src={t("common.logo-light")}
        priority 
        width={1000} 
        height={1000} 
        className={`${styles["actual-image"]} max-w-50`}  
        quality={100} alt="logo"
        />
      </div>
    </div>
  );
};

