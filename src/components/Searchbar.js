import React from "react";


function Searchbar(props) {
    return (
        <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
        />
      </div>
    </form>
    );
}

export default Searchbar;
