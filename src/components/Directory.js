// import  from "react";
import React, { useEffect, useState } from "react";
import Jumbotron from "./Jumbotron";
import Search from "./Search";
import Employee from "./Employee";
import Ninja from "../assets/employees.json"

const Directory = () => {
    const [employees, setEmployees] = useState([])
    const [order, setOrder] = useState([])
    const [filteredEmp, setFilteredEmp] = useState([])

    useEffect(() => {
        setEmployees(Ninja)
        setFilteredEmp(Ninja)
    }, [])
    
    useEffect(()=> {
        console.log('employees changed')
    },[order])

    const handleOnChange = (event) => {
        console.log("There has been a change", event.target.value)
        const query = event.target.value;
        const queryList = employees.filter((user) => {
            console.log("object", Object.values(user))
          let values = Object.values(user).join("").toLowerCase();
          return values.indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredEmp(queryList) 
    }

    const alphabetize = () => {
       const sortNames = [...employees]
       setFilteredEmp(sortNames.sort((a, b)=> {
            var nameA = a.name.first.toUpperCase()
            var nameB = b.name.first.toUpperCase()
            // console.log('a', nameA)
            // console.log('b', nameB)
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
        }))
    }

    
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