import React from "react";

// Returns Component
const Search = ({onChange}) => {
    return(
    <>
        {/* Styles the Bar */}
        <form style = {{width: "300px", marginLeft: "auto", marginRight: "auto"}}>
            <input className="form-control" type="text" placeholder="Search employees" onChange={onChange}/>
        </form>
    </>
    )
}

export default Search