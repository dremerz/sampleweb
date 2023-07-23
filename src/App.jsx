import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Test from './Test';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route to="/">
        <Route index element={<Home />} />
        <Route path="/test" element={<Test />}/>
        </Route>
    </Routes>
  </BrowserRouter>
  )
}
