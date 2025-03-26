import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import AllRestaurant from "./components/AllRestaurant";
import Menu from "./components/Menu";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/restaurants" element={<AllRestaurant />} />
        <Route path="/menu/:id" element={<Menu />} />
      </Routes>
    </div>
  );
};
export default App;
