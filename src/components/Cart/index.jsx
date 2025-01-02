import styles from "./Cart.module.scss";
import CartItem from "../CartItem";
import Info from "../Info";
function Cart({ onDelete, onCloseCart, itemsCart = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapperCart}>
        <h2>
          Корзина
          <img
            onClick={onCloseCart}
            src="img/remove.svg"
            alt="Закрыть корзину"
          />
        </h2>
        {itemsCart.length > 0 ? (
          <>
            <div className={styles.items}>
              {itemsCart.map((obj) => (
                <CartItem
                  key={obj.id_sn}
                  title={obj.title}
                  price={obj.price}
                  imgURL={obj.imgURL}
                  id={obj.id_sn}
                  onDelete={onDelete}
                />
              ))}
            </div>
            <div className={styles.totalBlock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>25 998 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1 300 руб.</b>
                </li>
              </ul>
              <button>
                Оформить заказ <img src="/img/arrow.svg" alt="" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title="Корзина пуста"
            description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            image="img/empty-cart.jpg"
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
