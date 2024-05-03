// AuthLayout.js

import React from 'react';
import { Link } from 'react-router-dom';
import dummyImg from "../assets/dummyImg.jpg"
const Layout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="main-page">
        <div className="left">
          <img src={dummyImg} alt="dummyImg" className="dummyImg" />
        </div>
        <div className="right">
          <div className="right-container">
            <div className="meena__logo">
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
