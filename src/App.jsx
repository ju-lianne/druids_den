import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Home/Home.page";
import Credits from "./pages/Credits/Credits.page";
import Error from "./pages/Error/Error.page";

import AnimalForm from "./pages/AnimalForm/AnimalForm.page";
import Grimoire from "./pages/Grimoire/Grimoire.page";
import Spells from "./pages/Spells/Spells.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/credits' element={<Credits />}/>
        <Route path='/*' element={<Navigate to="/404" />} />
        <Route path='/404' element={<Error />} />

        <Route path='/animalForm' element={<AnimalForm />}/>
        <Route path='/grimoire' element={<Grimoire />}/>
        <Route path='/spells' element={<Spells />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
