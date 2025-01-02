import styles from "./CartItem.module.scss";

function CartItem({ imgURL, title, price,onDelete, id }) {

  return (
    <div className={styles.item}>
      <img src={imgURL} width="30%" alt="" />
      <div className={styles.info}>
        <h5>{title}</h5>
        <b>{price} руб.</b>
      </div>
      <img src="img/remove.svg" alt="Удалить из корзины" onClick={()=>onDelete(id)} />
    </div>
  );
}

export default CartItem;
