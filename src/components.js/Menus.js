import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Route  } from 'react-router-dom';

import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";

import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout";
import { AppProvider } from '../context/AppProvider';

//create a global context that can store to its children
//step 1

function Menus() {
  return (
    <div>
      <Router>
        <AppProvider>
      <Header />
      <Hero />
      {/* <Routes>
        <Route path="/">  
      <AllMenus>
        <SpecialDishes />
        <FilteredDishes />
      </AllMenus>
      </Route>

      <Route path="/checkout">
    <Checkout/>
    </Route>

      </Routes> */}
      <Routes>
  <Route path="/" element={<AllMenus>
    <SpecialDishes />
    <FilteredDishes />
    </AllMenus>} />
  <Route path="/checkout" element={<Checkout />} />
</Routes>
</AppProvider>
      </Router>
    </div>
  );
}

export default Menus;
