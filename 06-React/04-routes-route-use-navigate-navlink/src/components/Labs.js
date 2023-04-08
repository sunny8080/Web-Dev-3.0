import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>This is Labs page</h1>

            <button onClick={() => navigate('/about')}>Move to About page</button>
        </div>
    )
}

export default Labs