import { useRef } from 'react'
import './search.css'

function Search({ handlerSearch }) {
    const inputRef = useRef()
    function onSearch() {
        handlerSearch(inputRef.current.value)
    }
    return (

        <div className='search'>
            <input type="text" placeholder="Search Pokemon" ref={inputRef} className='search-input' />
            <button onClick={onSearch} className='search-btn'>Search</button>
        </div>
    )
}

export default Search