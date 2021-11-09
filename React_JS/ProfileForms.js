import React, {useState} from "react";
import "./ProfileForms.css";

const ProfileForms = () => {
    const [name, setName] = useState("");
    const nameHandler = (event) => {
        setName(event.target.value);
    }
    const [number, setNumber] = useState("");
    const numberHandler = (event) => {
        setNumber(event.target.value);
    }
    const [date, setDate] = useState("");
    const dateHandler = (event) => {
        setDate(event.target.value);
    }
    const [place, setPlace] = useState("");
    const placeHandler = (event) => {
        setPlace(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const loginData = {
            id : Math.round(Math.random()*1000),
            name : name,
            number : number,
            date : new Date(date),
            place : place
        }
        console.log(loginData);
        setName("");
        setNumber("");
        setDate("");
        setPlace("");
    }
    return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Name</label>
                    <input type="text" value={name} onChange={nameHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Number</label>
                    <input type="number" value={number} onChange={numberHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>DOB</label>
                    <input type="date" value={date} onChange={dateHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Place</label>
                    <input type="text" value={place} onChange={placeHandler}/>
                </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">SUBMIT</button>
                </div>                
            </form>
    )
}

export default ProfileForms;