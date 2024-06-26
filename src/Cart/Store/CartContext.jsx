import { createContext, useState } from "react";
import { ProductsList } from "../ProductsList";

export const CartContext = createContext({
  Items: [],
  handleCountChane: () => {},
  handleAddToCart: () => {},
});

export function CartContextLogic({ children }) {
  const [cartlist, setCartList] = useState([]);

  function handleAddToCart(id) {
    setCartList((prevItmes) => {
      const UpdatedItems = [...prevItmes];
      const existingItemIndex = UpdatedItems.findIndex(
        (item) => item.id === id
      );
      if (UpdatedItems[existingItemIndex]) {
        const UpdateItem = UpdatedItems[existingItemIndex];
        UpdateItem.count = UpdateItem.count + 1;
        UpdatedItems[existingItemIndex] = UpdateItem;
      } else {
        const NewItem = ProductsList.find((item) => item.id === id);
        UpdatedItems.push(NewItem);
      }
      return UpdatedItems;
    });
  }

  function handleCountChane(op, id) {
    setCartList((prevItems) => {
      const UpdateItems = [...prevItems];
      const existingItemIndex = UpdateItems.findIndex((item) => item.id === id);
      const UpdateItem = UpdateItems[existingItemIndex];
      if (op == "+") {
        UpdateItem.count++;
      } else if (op == "-") {
        console.log("count", UpdateItem.count);
        UpdateItem.count--;
        if (UpdateItem.count <= 0) {
          UpdateItems.pop(existingItemIndex);
          return UpdateItems;
        }
      }
      UpdateItems[existingItemIndex] = UpdateItem;
      return UpdateItems;
    });
  }

  const cart = {
    Items: cartlist,
    handleCountChane: handleCountChane,
    handleAddToCart: handleAddToCart,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
