import React from 'react';
import './App.css';
import InitialSection from "./components/InitialSection"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './components/Article';

function App() {
  return (
    <BrowserRouter>
    <div className="container text-center">
      <InitialSection />
      <Routes>
        <Route element={<Article />} path='/' ></Route>

      </Routes>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
