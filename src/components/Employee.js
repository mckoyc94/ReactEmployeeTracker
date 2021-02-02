import React from "react";

const Employee = ({ninja}) => {
    const {image, name, position, email, birthday} = ninja
    return(
    <tr>
        <td><img src = {image} alt = {name.first} width="150px" height="100px"></img></td>
        <td>{name.first} {name.last}</td>
        <td>{position}</td>
        <td>{email}</td>
        <td>{birthday}</td>
    </tr>
    )
}

export default Employee