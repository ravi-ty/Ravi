import React, { useEffect, useState } from "react";
import "./Fetch.css";

function FetchFunction(){
    const [error, setError] = useState(null);
    const [isFetch, setIsFetch] = useState(false);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(
        result => {
            setIsFetch(true);
            setEmployees(result);
        },
        error => {
            setIsFetch(true);
            setError(error);
        })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isFetch) {
        return <div>Fetching...</div>;
        } else {
        return (
            <div className="fet">
            <table>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                </tr>
            {employees.map(employee => (
                <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td> 
                </tr>
            ))}
            </table>
            </div>
        );
        }
    }

export default FetchFunction;