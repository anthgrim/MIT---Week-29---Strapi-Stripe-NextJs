import React, { useState } from "react";
import Cart from "../components/cart";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import RestaurantList from "../components/restaurantList";
import { InputGroup, InputGroupText, Input } from "reactstrap";

function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  const [query, setQuery] = useState("");
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });

  return (
    <ApolloProvider client={client}>
      <div className="search">
        <h2> Local Restaurants</h2>
        <InputGroup>
          <InputGroupText>Search</InputGroupText>
          <Input
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup>
        <br></br>
      </div>
      <RestaurantList search={query} />
      <Cart> </Cart>
    </ApolloProvider>
  );
}
export default Home;
