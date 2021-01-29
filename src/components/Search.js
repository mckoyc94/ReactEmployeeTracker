import React from "react";

const Search = () => {
    return(
    <>
        <form style = {{width: "300px", marginLeft: "auto", marginRight: "auto"}}>
            <input className="form-control" type="text" placeholder="Search employees" />
        </form>
    </>
    )
}

export default Search