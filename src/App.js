import React, { useState, useEffect } from 'react';
import './App.css';
import { populateEmpList } from './API';

function App() {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">This is an employee database.</p>
        <hr className="my-4"></hr>
        <p>Search for employees by name:</p>
          <form>
            <label>Employee name:</label>
            <input type="text"></input>
          </form>
        <p className="lead">
        </p>
    </div>
    </>
  );
}

export default App;