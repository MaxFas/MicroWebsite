import React, {ChangeEvent, MouseEvent, useState} from "react";
import styles from './Promo.module.css'
import InputMask from "react-input-mask";


export function Promo() {
  const [number, setNumber] = useState<string>("+7")
  const [valueCheckbox, setValueCheckbox] = useState<boolean>(false)
  const [successfulReg, setSuccessfulReg] = useState<boolean>(false)
  const buttons:Array<string> = ['1','2','3','4','5','6','7','8','9','СТЕРЕТЬ','0']


  const onNumberClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (number.length === 12) {
      setNumber(number)
    } else {
      const currentNumber = e.currentTarget.value
      setNumber(number + currentNumber)
    }
  }
  const onDeleteClick = () => {
    if (number.length < 3) {
      setNumber(number)
    } else {
      const currentNumber = number.substring(0, number.length - 1)
      setNumber(currentNumber)
    }
  }
  const onCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueCheckbox(e.currentTarget.checked)
  }

  if (!successfulReg) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Введите ваш номер мобильного телефона</div>
        <InputMask mask="+7(999)999-99-99" className={styles.number} value={number} readOnly/>
        <div className={styles.description}>и с Вами свяжется наш менеждер для дальнейшей
          консультации
        </div>
        <div className={styles.containerButtons}>
          <div className={styles.buttonPanel}>
            {buttons.map((b, i) => {
                if (b === 'СТЕРЕТЬ') {
                  return <button key={i} className={styles.buttonDelete}
                                 onClick={() => onDeleteClick()}>{b}</button>
                } else {
                  return <button key={i} className={styles.buttonNum}
                                 value={b} onClick={(e) => onNumberClick(e)}>{b}
                  </button>}
              }
            )}
          </div>
        </div>
        <div className={styles.agreementContainer}>
          <input className={styles.checkbox} checked={valueCheckbox}
                 onChange={(e) => {
                   onCheckboxHandler(e)
                 }} type="checkbox"/>
          <a className={styles.agreement} href="/">Согласие на обработку персональных данных</a>
        </div>
        <button className={styles.enterButton} onClick={() => {
          setSuccessfulReg(true)
        }}
                disabled={number.length !== 12 || !valueCheckbox}>ПОДТВЕРДИТЬ НОМЕР
        </button>
      </div>
    )
  }
  else {
    return (
      <div className={styles.container}>
        <div className={styles.SuccessTitle}>ЗАЯВКА ПРИНЯТА</div>
        <div className={styles.SuccessDescription}>Держите телефон под рукой.  Скоро с Вами свяжется наш менеджер.
        </div>
      </div>)
  }
}
