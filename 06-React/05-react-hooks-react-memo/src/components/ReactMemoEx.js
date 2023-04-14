import React, { useState, memo } from 'react'

const ReactMemoEx = () => {
    const [name, setName] = useState('Sunny');
    const [address, setAddress] = useState('kolkata');

    return (
        <div>
            <label>
                Enter Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />

            <label>
                Enter Address
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>

            <p>Name in parent : {name}</p>
            <p>Address in parent : {address}</p>

            <ReactComponent name={name} />
        </div>
    )
}



// before using memo ReactComponent renders when parent re renders,   
// after using memo, ReactComponent will only rendered when name changes, and not when address changes

// function ReactComponent({ name }) {
const ReactComponent = memo(function ReactComponent({ name }) {
    console.log("ReactComponent rendered");

    return <div>Name in child : {name}</div>
});

export default ReactMemoEx