
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import Confess from './pages/confess/Confess';
import Confessions from './pages/confessions/Confessions';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';
import Admin from './pages/admin/Admin';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/config';

function App() {
  const [data, setData] = useState([])
  const{mode} = useTheme()

  useEffect(() => {
    const ref = collection(db, 'displayed');
    getDocs(ref).then((snapshot) => {
      const results = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(results);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className= {`App ${mode}`}>
     <BrowserRouter>
      <Navbar/>
      <SearchBar data={data}/>
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
