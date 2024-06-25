import React, { useState } from "react";
import CartHeader from "./CartHeader";
import Products from "./Products";
import { ProductsList } from "./ProductsList";
import CartPage from "./CartPage";
import AddItem from "./AddProduct/AddItem";
import { CartContext } from "./Store/CartContext";

function CartHome() {
  const [cartlist, setCartList] = useState([]);
  const [addItem, setAddItem] = useState(false);

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

  const cart = {
    Items: cartlist,
    handleCountChane: handleCountChane,
    handleAddToCart: handleAddToCart,
  };

  return (
    <CartContext.Provider value={cart}>
      {addItem ? (
        <AddItem />
      ) : (
        <div>
          <CartHeader count={cartlist.length} />
          <Products />
        </div>
      )}
    </CartContext.Provider>
  );
}

export default CartHome;
