import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
