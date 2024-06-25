import React, { useContext } from "react";
import CartHeader from "./CartHeader";
import Products from "./Products";
import { ProductsList } from "./ProductsList";
import CartPage from "./CartPage";
import AddItem from "./AddProduct/AddItem";
import { CartContext } from "./Store/CartContext";
import { CartContextLogic } from "./Store/CartContext";

function CartHome() {
  const { Items } = useContext(CartContext);
  console.log(Items);
  return (
    <CartContextLogic>
      <CartHeader />
      <Products />
    </CartContextLogic>
  );
}

export default CartHome;
