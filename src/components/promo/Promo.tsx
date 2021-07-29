import React, {ChangeEvent, MouseEvent, useState} from "react";
import styles from './Promo.module.css'
import InputMask from "react-input-mask";



export function Promo() {
  const [number, setNumber] = useState<string>("+7")
  const [valueCheckbox, setValueCheckbox] = useState<boolean>(false)


  const onNumberClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (number.length === 12) {
      setNumber(number)
    } else {
      const currentNumber = e.currentTarget.value
      setNumber(number+currentNumber)
    }
  }

  const onDeleteClick = () => {
    const currentNumber = number.substring(0,number.length-1)
    setNumber(currentNumber)
  }

  const onCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueCheckbox(e.currentTarget.checked)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Введите ваш номер мобильного телефона</div>
      <InputMask mask="+7(999)999-99-99" className={styles.number} value={number} readOnly/>
      <div className={styles.description}>и с Вами свяжется наш менеждер для дальнейшей
        консультации
      </div>
      <div className={styles.containerButtons}>
        <div className={styles.buttonPanel}>
          <button className={styles.buttonNum}
                  value={1} onClick={(e)=>onNumberClick(e)}>1</button>
          <button className={styles.buttonNum}
                  value={2} onClick={(e)=>onNumberClick(e)}>2</button>
          <button className={styles.buttonNum}
                  value={3} onClick={(e)=>onNumberClick(e)}>3</button>
          <button className={styles.buttonNum}
                  value={4} onClick={(e)=>onNumberClick(e)}>4</button>
          <button className={styles.buttonNum}
                  value={5} onClick={(e)=>onNumberClick(e)}>5</button>
          <button className={styles.buttonNum}
                  value={6} onClick={(e)=>onNumberClick(e)}>6</button>
          <button className={styles.buttonNum}
                  value={7} onClick={(e)=>onNumberClick(e)}>7</button>
          <button className={styles.buttonNum}
                  value={8} onClick={(e)=>onNumberClick(e)}>8</button>
          <button className={styles.buttonNum}
                  value={9} onClick={(e)=>onNumberClick(e)}>9</button>
          <button className={styles.buttonDelete} onClick={()=>onDeleteClick()}>СТЕРЕТЬ</button>
          <button className={styles.buttonNum}
                  value={0} onClick={(e)=>onNumberClick(e)}>0</button>
        </div>
      </div>
      <div className={styles.agreementContainer}>
        <input className={styles.checkbox} checked={valueCheckbox}
               onChange={(e)=>{onCheckboxHandler(e)}} type="checkbox"/>
        <a className={styles.agreement} href="/">Согласие на обработку персональных данных</a>
      </div>
      <button className={styles.enterButton}
              disabled={number.length !== 12||!valueCheckbox}>ПОДТВЕРДИТЬ НОМЕР</button>
    </div>
  );
}