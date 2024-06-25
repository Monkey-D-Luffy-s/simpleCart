import React, { useState } from "react";
import CartHeader from "./CartHeader";
import Products from "./Products";
import { ProductsList } from "./ProductsList";
import CartPage from "./CartPage";
import { CartContext } from "./Store/CartContext";

function CartHome() {
  const [cartlist, setCartList] = useState([]);

  function handleAddToCart(id) {
    let existingItem = cartlist.filter((item) => item.id === id);
    if (existingItem.length > 0) {
      const ItemAdd = cartlist.find((item) => item.id === id);
      ItemAdd.count += 1;
      setCartList((preItem) => {
        return [...preItem];
      });
    } else {
      const newprod = ProductsList.find((item) => item.id === id);
      console.log("newprod", newprod);
      setCartList((prevItems) => {
        return [...prevItems, newprod];
      });
    }
  }

  function handleCountChane(op, id) {
    if (op == "+") {
      const ItemAdd = cartlist.find((item) => item.id === id);
      ItemAdd.count += 1;
      setCartList((preItem) => {
        return [...preItem];
      });
    } else if (op == "-") {
      const ItemAdd = cartlist.find((item) => item.id === id);
      ItemAdd.count -= 1;
      if (ItemAdd.count <= 0) {
        const updatedList = cartlist.filter((item) => item.id !== id);
        setCartList((prevList) => {
          return [...updatedList];
        });
        console.log(updatedList);
      } else {
        setCartList((preItem) => {
          return [...preItem];
        });
      }
    }
  }

  return (
    <CartContext.Provider>
      <CartHeader
        Cartitemslist={cartlist}
        count={cartlist.length}
        handleCountChane={handleCountChane}
      />
      <Products handleAddToCart={handleAddToCart} />
    </CartContext.Provider>
  );
}

export default CartHome;
