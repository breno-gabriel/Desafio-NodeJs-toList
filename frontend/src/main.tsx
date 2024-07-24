import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MemberRegistration from './pages/MemberRegistration';
import TaskList from './pages/TaskList';
import EditTask from './pages/editTask';
import CreateTask from './pages/createTask';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-list" element={<TaskList/>} />
        <Route path="/member-registration" element={<MemberRegistration />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/registerTask" element={<CreateTask />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
