import React from 'react';
import './search.css';
/*function Search(proprs) {
  return (
    <form action=""></form>
  )
}*/

const Search = () => ( // => pharentesis replaces the return
  <form action="" className="Search">
    <input
      type="text"
      placeholder=""
      className="Search-input"
    />
  </form>
)

export default Search
