// Imports for Directory
import React, { useEffect, useState } from "react";
import Jumbotron from "./Jumbotron";
import Search from "./Search";
import Employee from "./Employee";
import Ninja from "../assets/employees.json"

// Component
const Directory = () => {
    // State
    const [employees, setEmployees] = useState([])
    const [filteredEmp, setFilteredEmp] = useState([])

    // On Mount, sets State for Employees and Filtered Employees
    useEffect(() => {
        setEmployees(Ninja)
        setFilteredEmp(Ninja)
    }, [])

    // When user types in name, filters through the employees to find employee and is returned to User
    const handleOnChange = (event) => {
        const query = event.target.value;
        const queryList = employees.filter((user) => {
            console.log("object", Object.values(user))
          let values = Object.values(user).join("").toLowerCase();
          return values.indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredEmp(queryList) 
    }

    // Once "Name" Column is clicked, arranges Employees in Alphabetical Order 
    const alphabetize = () => {
       const sortNames = [...employees]
       setFilteredEmp(sortNames.sort((a, b)=> {
            var nameA = a.name.first.toUpperCase()
            var nameB = b.name.first.toUpperCase()
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
        }))
    }

    // Returns to App.js
    return(
        <>
            <Jumbotron />
            <Search onChange = {handleOnChange}/>
            <div className='container'>
                    <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th onClick ={ () => alphabetize() }>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                            <th>Birthday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmp.map((ninja, i) =>{
                            return (
                                <Employee key={i} ninja = {ninja}/>    
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Directory