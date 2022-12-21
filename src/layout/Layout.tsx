import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

// const Container = styled.div`
//   width: 100vw;
//   padding: 0 2em;
//   max-width: 1280px;
//   margin: 0 auto;
// `;

export default Layout;
