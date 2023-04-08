import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();


    return (
        <div>
            <h1>This is About Page</h1>
            <button onClick={() => navigate('/support')}>Go to Support Page</button>
            <button onClick={() => navigate('/footer')}>Go to Footer Page</button>
        </div>
    )
}

export default About