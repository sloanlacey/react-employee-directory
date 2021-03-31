import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Jumbotron';

// const Title = () => <h1 style={{width: '100%', textAlign: 'center'}}>Employee Directory</h1>

function App() {
  return (
    <>
    <Header />
    <br></br>
    <SearchBar />
    <br></br>
    <EmployeeTable />
    </>
  );
}

export default App;