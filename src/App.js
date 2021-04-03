import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
// import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Jumbotron';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <Header />
    <br></br>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <br></br>
    <EmployeeTable searchTerm={searchTerm} />
    </>
  );
}

export default App;