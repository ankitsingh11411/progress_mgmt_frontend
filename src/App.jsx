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
        <Route path="/" element={<TaskList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/tasks" element={<TaskList />}>
          <Route index element={<TaskList />} />
          <Route path=":id" element={<TaskDetail />} />
        </Route>
        <Route path="/edittask" element={<EditTask />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
