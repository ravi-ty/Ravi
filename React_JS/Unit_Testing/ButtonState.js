import {useState} from "react";

function ButtonState () {

    const [changedText, setChangedText] = useState(false);
    const changedTextHandler = () => {
        setChangedText(true);
    }

    return (
        <div>
            <h2>RRR on Jan 7th</h2>
            {!changedText && <p>Watch in Theater</p>}
            {changedText && <p>Watch in IMAX</p>}
            <button onClick = {changedTextHandler}>Change Text</button>
        </div>
    )
}

export default ButtonState;