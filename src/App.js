import logo from './logo.svg';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import React from 'react';
import Confess from './pages/confess/Confess';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path = "/" element = {<Confess/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
