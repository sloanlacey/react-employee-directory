import React from 'react';
import EmployeeTable from './EmployeeTable';
import './App.css';
import SearchBar from './SearchBar';

const Title = () => <h1 style={{width: '100%', textAlign: 'center'}}>Employee Directory</h1>

function App() {
  return (
    <>
    <Title />
    <br></br>
    <SearchBar />
    <br></br>
    <EmployeeTable />
    </>
  );
}

export default App;