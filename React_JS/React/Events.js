import React from "react";
import Forms from "./Forms";
import "./Events.css";

const Events = (props) => {
    const loginDataHandler=(data)=>{
        console.log(data);
        props.onLogData(data);
    }
    return (
        <div className="new-expense">
            <Forms onLoginData={loginDataHandler}></Forms>
        </div>
    )

    /*function handleSubmit(event){
        event.preventDefault();
        console.log("You have clicked submit button");
        console.log(event);
    }

    return (
        
            <form onSubmit={handleSubmit}>
            <button type="submit">SUBMIT</button>
            </form>

            )*/

}

export default Events;