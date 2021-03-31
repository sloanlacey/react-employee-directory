import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = () => {
    return (
    <Jumbotron>
        <h1>Employee Directory</h1>
        <p>
            This is an employee directory with a searchable database.
        </p>
    </Jumbotron>
    );
};

export default Header;
