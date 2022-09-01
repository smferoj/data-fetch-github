import React, { useState } from 'react';
import './Search.css'
import {FaSearch} from 'react-icons/fa'

const Search = ({setUsername}) => {

    const[userInput, setUserInput] = useState('')

    const getData =(event) =>{
        setUserInput(event.target.value)
    }

    const getInputData =(event) =>{
        event.preventDefault()
        setUsername(userInput)
    }

    return ( 
            <div className="search">
                <FaSearch className='search_icon'/>
                <form onSubmit={getInputData} className="d-flex">
                    <input onChange={getData} type="text" value={userInput} placeholder="Search the User Name"/>
                    <button ClassName="btn" type='submit'>search </button>
                </form>
            </div>
           
    );
};

export default Search;


