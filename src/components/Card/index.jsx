import styles from "./Card.module.scss";
// import { useState } from "react";

function Card({
  imgURL,
  title,
  price,
  onPlus,
  onDel,
  isChecked,
  isFavorit,
  onFavorite,
  onUnFavorite,
}) {
  // const [isAdded, setIsAdded] = useState(isChecked);

  const onClickPlus = () => {
    isChecked = !isChecked;
    isChecked ? onPlus() : onDel();
  };
  const onClickFavorit = () => {
    isFavorit = !isFavorit;
    isFavorit ? onFavorite() : onUnFavorite();
    console.log(isFavorit);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorit}
          src={isFavorit ? "img/liked.svg" : "img/unliked.svg"}
          alt="Добавить в закладки"
        />
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
