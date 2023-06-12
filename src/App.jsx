/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Single_Property from "./pages/single/Single_Property";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-property" element={<Single_Property />} />
      </Routes>
    </div>
  );
}

export default App;
