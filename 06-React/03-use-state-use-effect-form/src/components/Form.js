import React from 'react'
import { useState } from 'react';

const Form1 = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", human: true, superhero: false, mode: "offline-mode", favCar: "XUV 700" });

    // console.log(formData);

    const changeHandler = (event) => {
        const { name, value, checked, type } = event.target
        // console.log(event)
        // console.log(event.target)
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    }


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Printing all data : ")
        console.log(formData)
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='First Name' name='firstName' value={formData.firstName} onChange={changeHandler} />
                <br />
                <br />

                <input type="text" placeholder='Last Name' name='lastName' value={formData.lastName} onChange={changeHandler} />
                <br />
                <br />

                <input type="email" placeholder='Email' name='email' value={formData.email} onChange={changeHandler} />
                <br />
                <br />

                <textarea placeholder='Enter yours comments here' name="comments" cols="30" rows="3" value={formData.comments} onChange={changeHandler}></textarea>
                <br />
                <br />

                <input type="checkbox" id="human" name="human" checked={formData.human} onChange={changeHandler} />
                <label htmlFor="human" >Are you a human being ?</label>
                <br />
                <br />

                <input type="checkbox" id="superhero" name="superhero" checked={formData.superhero} onChange={changeHandler} />
                <label htmlFor="superhero" >Are you a superhero ?</label>
                <br />
                <br />


                <fieldset style={{ width: "50vw", margin: "0 auto" }}>
                    <legend>Mode</legend>
                    <input type="radio" name="mode" id="offline-mode" value="offline-mode" checked={formData.mode === "offline-mode"} onChange={changeHandler} />
                    <label htmlFor="offline-mode">Offline Mode</label>

                    <input type="radio" name="mode" id="online-mode" value="online-mode" checked={formData.mode === "online-mode"} onChange={changeHandler} />
                    <label htmlFor="online-mode">Online Mode</label>
                </fieldset>
                <br />
                <br />


                <label htmlFor="favCar">Tell me your Favourite Car</label>
                <select name="favCar" id="favCar" value={formData.favCar} onChange={changeHandler}>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Fortuner">Fortuner</option>
                    <option value="Thar">Thar</option>
                    <option value="XUV 700">XUV 700</option>
                    <option value="Legender">Legender</option>
                    <option value="Defender">Defender</option>
                    <option value="Jiteder">Jiteder</option>
                </select>
                <br />
                <br />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form1
