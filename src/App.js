import React from 'react';
import Apply from './pages/application';
import Login from './pages/login';
import Signup from './pages/signup';
import NotFound from './pages/notfound';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Applicants from './pages/applicants';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<Apply/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/applicants' element={<Applicants/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>

   
  );
}

export default App;
