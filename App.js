import React from 'react';
import { Router } from '@reach/router';
import LoginComponent from './components/Login';
import DashboardComponent from './components/Dashboard';
import Home from './components/Home';
import Colors from './components/Colors';

function App() {
  return (
    <div className='App'>
      <Router>
        <Home path='/home' />
        <LoginComponent path='/4' />
        <DashboardComponent path='/hello' />
        <Colors path='/hello/blue/red' />
      </Router>
    </div>
  );
}
export default App;
