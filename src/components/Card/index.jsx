import styles from "./Card.module.scss";
import { useState } from "react";

function Card({ imgURL, title, price, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus();
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
          src={isAdded ? "img/checked.svg" : "img/plus.svg"}
          alt="Добавить в корзину"
        />
      </div>
    </div>
  );
}

export default Card;
