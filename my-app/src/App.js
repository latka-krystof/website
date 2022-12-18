import './App.css';

import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Leadership from './components/Leadership';
import Experience from './components/Experience';
import Publications from './components/Publications';

import { Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {
  return (
    <div>
      <div id = "bar">
        <h2><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Krystof Latka</Link></h2>
        <div id = "navigation">
          <p><Link style={{textDecoration: 'none', color: 'black'}} to='/leadership'>Leadership</Link></p>
          <p><Link style={{textDecoration: 'none', color: 'black'}} to='/experience'>Experience</Link></p>
          <p><Link style={{textDecoration: 'none', color: 'black'}} to='/publications'>Publications</Link></p>
        </div>
      </div>
      <div id = "content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/publications' element={<Publications />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;