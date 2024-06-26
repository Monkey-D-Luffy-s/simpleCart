import { createContext, useState, useReducer } from "react";
import { ProductsList } from "../ProductsList";

export const CartContext = createContext({
  Items: [],
  handleCountChane: () => {},
  handleAddToCart: () => {},
});

function ShoppingCartReducer(state, actions) {
  if (actions.type == "Add_Item") {
    const UpdatedItems = [...state];
    const existingItemIndex = UpdatedItems.findIndex(
      (item) => item.id === actions.Id
    );
    if (UpdatedItems[existingItemIndex]) {
      const UpdateItem = UpdatedItems[existingItemIndex];
      UpdateItem.count = UpdateItem.count + 1;
      UpdatedItems[existingItemIndex] = UpdateItem;
    } else {
      const NewItem = ProductsList.find((item) => item.id === actions.Id);
      UpdatedItems.push(NewItem);
    }
    return UpdatedItems;
  } else if (actions.type == "Update_Item") {
    const UpdateItems = [...state];
    const existingItemIndex = UpdateItems.findIndex(
      (item) => item.id === actions.Id
    );
    const UpdateItem = UpdateItems[existingItemIndex];
    if (actions.op == "+") {
      UpdateItem.count++;
    } else if (actions.op == "-") {
      console.log("count", UpdateItem.count);
      UpdateItem.count--;
      if (UpdateItem.count <= 0) {
        UpdateItems.pop(existingItemIndex);
        return UpdateItems;
      }
    }
    UpdateItems[existingItemIndex] = UpdateItem;
    return UpdateItems;
  }
}

export function CartContextLogic({ children }) {
  const [shopingCartState, shoppingCartDispatch] = useReducer(
    ShoppingCartReducer,
    []
  );

  function handleAddToCart(id) {
    shoppingCartDispatch({
      type: "Add_Item",
      Id: id,
    });
  }

  function handleCountChane(op, id) {
    shoppingCartDispatch({
      type: "Update_Item",
      Id: id,
      op: op,
    });
  }

  const cart = {
    Items: shopingCartState,
    handleCountChane: handleCountChane,
    handleAddToCart: handleAddToCart,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
