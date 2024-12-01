import { useState } from "react";
import { useEffect } from "react";
//import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";
function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCatrItems] = useState([]);
  useEffect(() => {
    fetch("https://6745830b512ddbd807f8533a.mockapi.io/api/sniekers/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCatrItems([...cartItems, obj]);
    console.log(cartItems);
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Cart itemsCart={cartItems} onCloseCart={() => setCartOpened(false)} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content-title">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Поиск" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="wrapper-card">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgURL={obj.imgURL}
              onPlus={() => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// const arr = [
//   {
//     title: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 12999,
//     imgURL: "img/snikers/img1.jpg",
//   },
//   {
//     title: "Мужские Кроссовки Nike Air Max 270",
//     price: 15600,
//     imgURL: "img/snikers/img2.jpg",
//   },
//   {
//     title: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 8499,
//     imgURL: "img/snikers/img1.jpg",
//   },
//   {
//     title: "Кроссовки Puma X Aka Boku Future Rider",
//     price: 8999,
//     imgURL: "img/snikers/img2.jpg",
//   },
// ];/
