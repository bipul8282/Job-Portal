import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './component/Landing';
import Login from './component/Login';
import Signup from './component/Signup';
import JobDetails from './component/JobDetails';
import SuccessPage from './component/SuccessPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home"  element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;