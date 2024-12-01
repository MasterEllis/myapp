import styles from "./CartItem.module.scss";

function CartItem({imgUrl,title,price}) {
  return (
    <div className={styles.item}>
      <img src={imgUrl} width="30%" alt="" />
      <div className={styles.info}>
        <h5>{title}</h5>
        <b>{price} руб.</b>
      </div>
      <img src="img/remove.svg" alt="Удалить из корзины" />
    </div>
  );
}

export default CartItem;
