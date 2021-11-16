import React, {Component} from "react";
import "./Fetch.css";

class FetchClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isFetch : false,
            employees : []
        };
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(
        result => {
          this.setState({
            isFetch: true,
            employees: result
          });
        },
        error => {
          this.setState({
            isFetch: true,
            error
          });
        }
      )
    }

    render(){
        const { error, isFetch, employees } = this.state;
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

}

export default FetchClass;