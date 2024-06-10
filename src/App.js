import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import TopNav from './components/TopNav.jsx';


const App = () => {
  return (
    <BrowserRouter>

      <Sidebar>
      <TopNav/>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create_event" element={<About />} />
          
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;