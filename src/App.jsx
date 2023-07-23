import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Test from './Test';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<p>not found</p>} />
    </Routes>
  </BrowserRouter>
  // <Router>
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route path="/test" component={Test} />
       
  //       <Route component={<h>not found</h>} />
  //     </Switch>
  //   </Router>
  )
}
