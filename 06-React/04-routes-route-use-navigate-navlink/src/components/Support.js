import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();
    const labsHandler = () => {
        // move to labs page
        navigate('/labs')
    }

    const backHandler = () => {
        // move to back by 1 page
        navigate(-1)
    }

    return (
        <div>
            <h1>This is Support Page</h1>
            <button onClick={labsHandler}>Move to Labs Page</button>
            <button onClick={backHandler}>Go Back</button>
        </div>
    )
}

export default Support