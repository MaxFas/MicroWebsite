//@ts-ignore
import backVideo from '../../commons/video/backVideo.mp4'
import {Banner} from "../banner/Banner";
import React, {useEffect, useState} from 'react';
import '../../App.css';
import styles from './App.module.css'
import {Promo} from "../promo/Promo";
import QRImg from './../../commons/imges/qr.jpg'


function App() {
  const [viewBanner, setViewBanner] = useState<boolean>(false)
  const [pressOK, setPressOK] = useState<boolean>(false)
  const qr = {
    backgroundImage: `url(${QRImg})`,
  };

  function createStartingDelay() {
    return setViewBanner(true)
  }

  const selectContent = (pressOK: boolean) => {
    if (pressOK) {
      return <Promo/>
    } else {
      return <Banner setPressOK={setPressOK}/>
    }
  }

  const backToStart = () => {
    setPressOK(false)
    setViewBanner(false)
  }

  useEffect(() => {
    setTimeout(createStartingDelay, 5000)
  }, [viewBanner])

  return (
    <div className={styles.body}>
      <video autoPlay loop muted={true} className={styles.container}>
        <source src={backVideo} type='video/mp4'/>
      </video>
      {viewBanner ? selectContent(pressOK) : ''}
      {pressOK &&
      <div className={styles.sidePanel}>
        <div>
          <button className={styles.buttonClose} onClick={backToStart}>X</button>
        </div>
          <div className={styles.smallBanner}>
              <div className={styles.bannerInfo}>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</div>
              <div className={styles.qrImg} style={qr}></div>
          </div>
      </div>}
    </div>
  );
}


export default App;
