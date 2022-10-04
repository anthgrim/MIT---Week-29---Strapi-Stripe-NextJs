// /* /context/AppContext.js */

// import React from "react";
// // create auth context with default value

// // set backup default for isAuthenticated if none is provided in Provider
// const AppContext = React.createContext({
//   isAuthenticated: true,
//   cart: { items: [], total: 0 },
//   addItem: () => {},
//   removeItem: () => {},
//   user: false,
//   setUser: () => {},
// });
// export default AppContext;

import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    cart: {
      items: [],
      total: 0,
    },
    user: false,
    setUser: () => {},
    addItems: () => {},
    removeItems: () => {},
  });

  globalData.setIsAuthenticated = (boolVal) => {
    setGlobalData((prev) => ({ ...prev, isAuthenticated: boolVal }));
  };

  globalData.setUser = (userData) => {
    setGlobalData((prev) => ({ ...prev, user: userData }));
  };

  globalData.addItems = (item) => {
    let { items } = globalData.cart;
    let foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(
        (i) => i.attributes.dishId === item.attributes.dishId
      );

      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    if (!foundItem) {
      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;

      var newCart = {
        items: [...globalData.cart.items, temp],
        total: globalData.cart.total + item.attributes.price,
      };

      setGlobalData((prev) => ({ ...prev, cart: newCart }));
    } else {
      newCart = {
        items: items.map((item) => {
          if (item.attributes.dishId === foundItem.attributes.dishId) {
            return Object.assign({}, item, { quantity: item.quantity + 1 });
          } else {
            return item;
          }
        }),
        total: globalData.cart.total + item.attributes.price,
      };

      setGlobalData((prev) => ({ ...prev, cart: newCart }));
    }
  };

  globalData.removeItems = (item) => {
    let { items } = globalData.cart;

    const foundItem = items.find(
      (i) => i.attributes.dishId === item.attributes.dishId
    );

    console.log(foundItem);

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) => {
          if (item.attributes.dishId === foundItem.attributes.dishId) {
            return Object.assign({}, item, { quantity: item.quantity - 1 });
          } else {
            return item;
          }
        }),
        total: globalData.cart.total - item.attributes.price,
      };
    } else {
      const index = items.findIndex(
        (i) => i.attributes.dishId === foundItem.attributes.dishId
      );

      items.splice(index, 1);

      var newCart = {
        items: items,
        total: globalData.cart.total - item.attributes.price,
      };
    }

    setGlobalData((prev) => ({ ...prev, cart: newCart }));
  };

  return (
    <AppContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
