import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../styles/index.css';

const Header = () => {
    return (
    <Jumbotron className='jumbo'>
        <h1>Employee Directory</h1>
        <p>
            Search for employees by first name, last name, or by location. Always start your search with a capital letter, and continue typing to narrow your results.
        </p>
    </Jumbotron>
    );
};

export default Header;
