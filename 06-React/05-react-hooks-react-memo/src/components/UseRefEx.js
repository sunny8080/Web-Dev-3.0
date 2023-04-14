import React, { useEffect, useRef, useState } from 'react'

const UseRefEx = () => {
    const inputRef = useRef(null);
    const idRef = useRef(1)


    const [names, setNames] = useState(() => [
        { id: idRef.current++, name: "Sunny" },
        { id: idRef.current++, name: "Shyam" },
        { id: idRef.current++, name: "Jack" },
    ]);


    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function addName() {
        setNames([
            ...names,
            {
                id: idRef.current++,
                name: inputRef.current.value
            }
        ])
        inputRef.current.value = "";
    }

    return (
        <div>

            {/* uncontrolled input element */}
            <label>
                Enter your name &nbsp;
                <input type="text" ref={inputRef} />
            </label>

            <button onClick={addName}>Add Name</button>

            <ul>
                {
                    names.map((nameD) => <li key={nameD.id} >{nameD.id} - {nameD.name}</li>)
                }
            </ul>


        </div>
    )
}

export default UseRefEx