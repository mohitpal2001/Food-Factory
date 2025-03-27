import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import AllRestaurant from "./components/AllRestaurant";
import Menu from "./components/Menu";
import CarouselRestaurants from "./components/CarouselRestaurants";
import Search from "./components/Search";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/restaurants" element={<AllRestaurant />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/carrestaurants/:id" element={<CarouselRestaurants />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};
export default App;
