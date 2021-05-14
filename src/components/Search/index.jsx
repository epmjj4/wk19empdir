import React from 'react'

  
    function Search({handleUserInput,input}) {
    return (
        <div className="container my-3">
            <form className="form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => handleUserInput(e)}
                    value={input}
                />
            </form>
{input}


        </div>
    )
}

export default Search
