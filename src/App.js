import React from "react";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
