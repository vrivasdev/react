import React from 'react';
import './search.css';

const Search = (props) => ( // => pharentesis replaces the return
  <form
  className="Search"
  onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder=""
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search
