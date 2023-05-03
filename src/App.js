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

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { mode } = useTheme();

  // Called whenever search input changes
  // const handleSearch = (query) => {
  //   // Update searchQuery state
  //   setSearchQuery(query);
  //   // Update filteredData state
  //   setFilteredData(data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())));
  // };

  // Watch for changes in the searchQuery state and update the filteredData state accordingly
  // useEffect(() => {
  //   const filteredData = data.filter((item) =>
  //     item.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredData(filteredData);
  // }, [data, searchQuery]);

  useEffect(() => {
    const ref = collection(db, 'displayed');
    getDocs(ref).then((snapshot) => {
      const results = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(results);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  // Filter the data based on the search query
  // const filteredData = data.filter((item) => item.title.includes(searchQuery))

  if (!data) return null;

  return (
    <div className= {`App ${mode}`}>
     <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
       <Routes>
          <Route path = "/" element = {<Confessions/>} />
          {/* <Route path="/" element={<Navbar data={filteredData} />} /> */}
          {/* <Route path="/" element={<SearchBar />} /> */}
          <Route path = "/submit" element = {<Confess/>} />
          <Route path = "/admin" element = {<Admin/>} />
       </Routes>
       {/* <SearchBar /> */}
       {/* <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul> */}
      </BrowserRouter>
    </div>
  );
}

export default App;