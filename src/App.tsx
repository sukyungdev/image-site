// import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import FavoritePage from './pages/FavoritePage';
import MainPage from './pages/MainPage';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/favoritePage" element={<FavoritePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
