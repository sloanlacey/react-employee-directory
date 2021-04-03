import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <br></br>
    <EmployeeTable searchTerm={searchTerm} />
    </>
  );
}

export default App;