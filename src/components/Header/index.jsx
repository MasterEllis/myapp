import styles from "./Header.module.scss"

function Header(props) {
  
  return (
    <header>
      <div className={styles.leftHeader}>
        <img width={40} src="img/logo.png" alt="Logo" />
        <div>
          <h3>КРОССОВКИ REACT</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul>
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
          <span>{0} руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="img/favorite.svg" alt="Закладки" />
          <p>Закладки</p>
        </li>
        <li>
          <img width={18} height={18} src="img/user.svg" alt="Профиль" />
          <p>Профиль</p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
