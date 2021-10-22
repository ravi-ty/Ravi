import React from "react";
import Forms from "./Forms";
import "./Events.css";

const Events = () => {

    return (
        <div className="new-expense">
            <Forms></Forms>
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