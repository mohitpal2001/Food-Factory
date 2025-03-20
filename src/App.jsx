import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import AllRestaurant from "./components/AllRestaurant";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/restaurants" element={<AllRestaurant />} />
      </Routes>
    </div>
  );
};
export default App;
