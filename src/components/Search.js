import React from "react";

const Search = ({onChange}) => {
    return(
    <>
        <form style = {{width: "300px", marginLeft: "auto", marginRight: "auto"}}>
            <input className="form-control" type="text" placeholder="Search employees" onChange={onChange}/>
        </form>
    </>
    )
}

export default Search