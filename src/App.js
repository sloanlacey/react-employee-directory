import React from 'react';
import EmployeeTable from './EmployeeTable';
import './App.css';
import { Form } from 'react-bootstrap';

const Title = () => <h1 style={{width: '100%', textAlign: 'center'}}>Employee Directory</h1>

const SearchBar = () => {
  return (
    <Form.Control type="text" placeholder="Normal text" />
  );
}

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