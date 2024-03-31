import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Home/Home.page";
import Credits from "./pages/Credits/Credits.page";
import Error from "./pages/Error/Error.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/credits' element={<Credits />}/>
        <Route path='/*' element={<Navigate to="/404" />} />
        <Route path='/404' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
