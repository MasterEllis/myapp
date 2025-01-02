import styles from "./Card.module.scss";
// import { useState } from "react";

function Card({ imgURL, title, price, onPlus, onDel, isChecked }) {
  // const [isAdded, setIsAdded] = useState(isChecked);

  const onClickPlus = () => {
  isChecked = !isChecked;
  (isChecked)? onPlus(): onDel();
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/unliked.svg" alt="Нет" />
      </div>
      <img width="100%" src={imgURL} alt="Кроссовки" />
      <h5>{title}</h5>
      <div className={styles.cart}>
        <div className={styles.price}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          onClick={onClickPlus}
          src={isChecked ? "img/checked.svg" : "img/plus.svg"}
          alt="Добавить в корзину"
        />
      </div>
    </div>
  );
}

export default Card;
