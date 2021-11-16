import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ProfileEvents from "./ProfileEvents";
import HOC from "./HOC";
import Fragmnts from "./Fragmnts";
import Welcome from "./Router/Welcome";
import Products from "./Router/Products";
import MainHeader from "./Router/MainHeader";
import ProductDetails from "./Router/ProductDetails";


function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productID">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
      <ProfileEvents></ProfileEvents>
      <HOC></HOC>
      <Fragmnts></Fragmnts>
    </div>
  );
}

export default App;
