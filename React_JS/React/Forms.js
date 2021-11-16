import React, {useState} from "react";
import "./Forms.css";

const Forms = (props) => {
    const [name, setName] = useState("");
    const nameHandler = (event) => {
        setName(event.target.value);
    }
    const [id, setId] = useState("");
    const idHandler = (event) => {
        setId(event.target.value);
    }
    const [date, setDate] = useState("");
    const dateHandler = (event) => {
        setDate(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const loginData = {
            name : name,
            id : id,
            date : new Date(date)
        }
        console.log(loginData);
        props.onLoginData(loginData);
        setName("");
        setId("");
        setDate("");
    }
    return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Name</label>
                    <input type="text" value={name} onChange={nameHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>ID</label>
                    <input type="number" value={id} onChange={idHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>DOB</label>
                    <input type="date" value={date} onChange={dateHandler}/>
                </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">SUBMIT</button>
                </div>                
            </form>
    )
}

export default Forms;