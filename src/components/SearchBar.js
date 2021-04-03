import React from 'react';
import { Jumbotron, Form } from 'react-bootstrap';
import '../styles/index.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <>
    <Jumbotron className='jumbo'>
        <h1>Team Builder</h1>
        <p>
            Search for potential employees in our database by first name, last name or by city.
        </p>
        <div className='search'>
    <Form.Control
        type="text"
        placeholder="Start typing to search for employees"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
    />
        </div>
    </Jumbotron>
        </>
    );
};

export default SearchBar;
