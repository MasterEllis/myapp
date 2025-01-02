import { useState } from "react";
import { useEffect } from "react";
//import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";
import axios from"axios";
function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCatrItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // fetch("https://6745830b512ddbd807f8533a.mockapi.io/api/sniekers/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });
      axios.get("https://6745830b512ddbd807f8533a.mockapi.io/api/sniekers/items")
        .then((res) => {setItems(res.data); });
      // axios
      //   .get(
      //     "https://6745830b512ddbd807f8533a.mockapi.io/api/sniekers/cartItems"
      //   )
      //   .then((res) => {
      //     setCatrItems(res.data);
      //   });  
  }, []);

    useEffect(() => {}, [cartItems]);

  const onAddToCart = (obj) => {

    setCatrItems([...cartItems, obj]);
   
    // axios.post(
    //   "https://6745830b512ddbd807f8533a.mockapi.io/api/sniekers/cartItems",
    //   obj
    // );
  };
  const onRemoveItem = (id) => {
    // axios.delete(
    //   `https://6745830b512ddbd807f8533a.mockapi.io/api/sniekers/cartItems/${id}`
    // );
    setCatrItems((prev) => prev.filter((item) => item.id_sn !== id));
  };



  return (
    <div className="wrapper">
      {cartOpened ? (
        <Cart
          onDelete={(id) => onRemoveItem(id)}
          itemsCart={cartItems}
          onCloseCart={() => {setCartOpened(false); document.querySelector("body").style.overflow = "auto";}}
        />
      ) : null}
      <Header onClickCart={() => {setCartOpened(true); document.querySelector("body").style.overflow="hidden" }} />
      <div className="content">
        <div className="content-title">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Поиск" />
            <input
              onChange={(event) => setSearchValue(event.target.value)}
              value={searchValue}
              placeholder="Поиск..."
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                src="img/remove.svg"
                alt="Очистить"
              />
            )}
          </div>
        </div>
        <div className="wrapper-card">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj) => (
              
              <Card
                key={obj.id_sn}
                title={obj.title}
                price={obj.price}
                imgURL={obj.imgURL}
              
                onPlus={() => onAddToCart(obj)}
                onDel={() => onRemoveItem(obj.id_sn)}
                isChecked={
                  cartItems.findIndex((item) => obj.id_sn === item.id_sn) === -1
                    ? false
                    : true
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
