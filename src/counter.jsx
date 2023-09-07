import { useState } from "react"

export default function Counter() {

    const [count, setcount] = useState(0)

    //handle fun
    const handleAdd = () => {

        const newCount = count + 1;
        setcount(newCount)

    }
    //eventhandle fun
    const handleReduce = () => {

        const newCount = count - 1;
        setcount(newCount)

    }


    return (
        <div style={
            { border: '2px solid yellow' }
        }>

            <h4> counter:{count} </h4>
            <button onClick={handleAdd} style={{ marginBottom: '10px', backgroundColor: 'bisque' }}>Add</button>
            <button onClick={handleReduce} style={{ margin: '10px', backgroundColor: 'bisque' }}>Reduce</button>
        </div >
    )
}