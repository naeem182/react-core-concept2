import { useState } from "react"

export default function Team() {

    //set usestate
    const [count, setcount] = useState(0)

    //add handelEvent
    const handleAdd = () => {

        const addValue = count + 1;
        setcount(addValue);
    }

    //reduce handelEvent
    const handleReduce = () => {

        const addValue = count - 1;
        if (addValue < 0) { alert("you can't go less than 0") }
        else
            setcount(addValue);
    }





    const playerStyle = {
        border: "2px solid purple",
        margin: "10px",
        padding: "5px",
        borderRadius: "10px"
    }

    return (
        <div style={playerStyle}>
            <h3>Players:{count}</h3>
            <button style={{ backgroundColor: "blue" }} onClick={handleAdd}>Add</button>
            <button style={{ backgroundColor: "red", marginLeft: '10px' }} onClick={handleReduce}>Reduce</button>

        </div>
    )
}