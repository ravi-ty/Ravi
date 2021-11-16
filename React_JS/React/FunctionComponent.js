import React, {useState, useEffect} from "react";

function FunctionComponent(){
    /*const [count, setCount] = useState(0);
    return(
        <diV>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count+1)}>CLICK</button>
        </diV>
    )*/

    /*useEffect(()=>{
        console.log("Hello FC");
    },[]);
    return <h1>HELLO FC</h1>*/

    useEffect(()=>{
        return ()=>{
            console.log("Bye FC");
        };
    },[]);
    return <h1>BYE FC</h1>
}

export default FunctionComponent;