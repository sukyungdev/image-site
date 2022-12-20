import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favoritePage" element={<FavoritePage />} />
    </Routes>
  );
}

export default App;
