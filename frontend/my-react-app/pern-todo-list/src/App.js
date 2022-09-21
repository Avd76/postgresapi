import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditTodo from "./components/EditTodo";
import Home from "./components/Home";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/edit/:id' element={<EditTodo />} />
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
