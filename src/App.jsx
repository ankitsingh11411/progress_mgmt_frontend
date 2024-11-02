import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Login,
  Signup,
  AddTask,
  TaskList,
  EditTask,
  TaskDetail,
  Analytics,
  Settings,
  NotFound,
} from './pages/index.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/edittask" element={<EditTask />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tasklist/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
