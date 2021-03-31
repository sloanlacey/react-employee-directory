import React from "react";

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
      </div>
    </form>
    );
  }

  export default SearchBar;