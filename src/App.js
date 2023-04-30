
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import React from 'react';
import Confess from './pages/confess/Confess';
import Confessions from './pages/confessions/Confessions';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';
import Admin from './pages/admin/Admin';


function App() {
  const{mode} = useTheme()
  return (
    <div className= {`App ${mode}`}>
     <BrowserRouter>
      <Navbar/>
      <SearchBar/>
      <ThemeSelector/>
       <Routes>
          <Route path = "/" element = {<Confessions/>} />
          <Route path = "/submit" element = {<Confess/>} />
          <Route path = "/admin" element = {<Admin/>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
