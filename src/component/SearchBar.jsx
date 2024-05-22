import React from 'react'
import {FaSearch} from "react-icons/fa"
import "./Searchbar.css"


function SearchBar() {
  return (
    <>
    {/* <h1>Find Mentor</h1> */}
    <div className="input-wrapper">
      <FaSearch id="search-icon"/>
      <input  placeholder='Search' />
    </div>
    </>

  )
}

export default SearchBar