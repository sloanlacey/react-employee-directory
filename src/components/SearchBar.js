import React from "react";
import { Form } from 'react-bootstrap';
import '../styles/index.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className='search'>
      <Form.Control
        type="text"
        placeholder="Start with a capital letter"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
    />
    </div>
    );
  }

  export default SearchBar;