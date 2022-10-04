import { useContext, useState } from "react";
import Head from "next/head";
import { AppProvider } from "../components/context";
import AppContext from "../components/context";
import Home from "./index";
import Layout from "../components/layout";
import Cookie from "js-cookie";

function MyApp(props) {
  // var { cart, addItem, removeItem, user, setUser } = useContext(AppContext);
  // const [state, setState] = useState({ cart: cart });
  const { Component, pageProps } = props;

  // setUser = (currentUser) => {
  //   console.log("SETTING USER");
  //   setState((prev) => ({ ...prev, currentUser }));
  // };

  // addItem = (item) => {
  //   let { items } = state.cart;
  //   let foundItem = true;
  //   if (items.length > 0) {
  //     foundItem = items.find(
  //       (i) => i.attributes.dishId === item.attributes.dishId
  //     );

  //     if (!foundItem) foundItem = false;
  //   } else {
  //     foundItem = false;
  //   }
  //   // if item is not new, add to cart, set quantity to 1
  //   if (!foundItem) {
  //     //set quantity property to 1

  //     let temp = JSON.parse(JSON.stringify(item));
  //     temp.quantity = 1;
  //     var newCart = {
  //       items: [...state.cart.items, temp],
  //       total: state.cart.total + item.attributes.price,
  //     };
  //     setState({ cart: newCart });
  //   } else {
  //     // we already have it so just increase quantity ++
  //     newCart = {
  //       items: items.map((item) => {
  //         if (item.attributes.dishId === foundItem.attributes.dishId) {
  //           return Object.assign({}, item, { quantity: item.quantity + 1 });
  //         } else {
  //           return item;
  //         }
  //       }),
  //       total: state.cart.total + item.attributes.price,
  //     };
  //   }
  //   setState({ cart: newCart }); // problem is this is not updated yet
  // };

  // removeItem = (item) => {
  //   let { items } = state.cart;
  //   //check for item already in cart
  //   const foundItem = items.find(
  //     (i) => i.attributes.dishId === item.attributes.dishId
  //   );
  //   if (foundItem.quantity > 1) {
  //     var newCart = {
  //       items: items.map((item) => {
  //         if (item.attributes.dishId === foundItem.attributes.dishId) {
  //           return Object.assign({}, item, { quantity: item.quantity - 1 });
  //         } else {
  //           return item;
  //         }
  //       }),
  //       total: state.cart.total - item.attributes.price,
  //     };
  //   } else {
  //     // only 1 in the cart so remove the whole item
  //     const index = items.findIndex(
  //       (i) => i.attributes.dishId === foundItem.attributes.dishId
  //     );
  //     items.splice(index, 1);
  //     var newCart = {
  //       items: items,
  //       total: state.cart.total - item.attributes.price,
  //     };
  //   }
  //   setState({ cart: newCart });
  // };

  return (
    <AppProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
