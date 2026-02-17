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
        
      </div>
    </div>
  );
};

