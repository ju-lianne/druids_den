import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Home/Home.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
