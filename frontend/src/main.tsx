import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import MemberRegistration from './pages/MemberRegistration';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-list" element={<TaskList />} />
        <Route path="/member-registration" element={<MemberRegistration />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
