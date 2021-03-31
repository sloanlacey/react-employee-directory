import React from "react";
import { Button } from 'react-bootstrap';

const SearchBar = (props) => {
    return (
        <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search for Employees:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a first name to search for an employee"
          id="term"
        />
        <Button variant="primary">Search</Button>
      </div>
    </form>
    );
  }

  export default SearchBar;