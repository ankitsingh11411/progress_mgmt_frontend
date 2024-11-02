import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Login,
  Signup,
  Home,
  Analytics,
  Settings,
  NotFound,
} from './pages/index.js';
import DashBoard from './components/dashboard/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
