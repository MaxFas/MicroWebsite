import React from "react";
import styles from './Bunner.module.css'
import QRImg from './../../commons/imges/qr.jpg'

type BannerPropsType = {
  setPressOK: (pressOK: boolean) => void
}

export const Banner: React.FC<BannerPropsType> = (props) => {
  const {setPressOK} = props
  const qr = {
    backgroundImage: `url(${QRImg})`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </div>
      <div className={styles.qrImg} style={qr}/>
      <div className={styles.description}>
        Сканируйте QR-код или нажмите ОК
      </div>
      <button onClick={() => setPressOK(true)} className={styles.button}>OK</button>
    </div>
  );
}