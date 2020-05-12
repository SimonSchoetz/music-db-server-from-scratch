import React, { useState } from 'react'

export default function LogIn() {

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");


    const handleSubmit = event => {
        event.preventDefault()

        //POST request
        const body = {
            "email": email,
            "pw": pw,
        };

        const postData = async (url, data) => {

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    // "Accept": "application/json",
                    "Content-Type": "application/json",
                    "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwMTkyMjI0MzAzZDJmNTAyM2FiM2EiLCJpYXQiOjE1ODg1OTkwNzR9.u3oGxeRLOMgILOwWG1VsuJWCEAtkz4G1EbYSQgE5ObY"
                },
                body: JSON.stringify(data)
            })
            return response.json()
        }
        postData("http://localhost:3000/users/login", body)
            .then(data => { console.log(data) })
        //reset form
        setEmail("");
        setPw("");

    }

    const handleFormInput = event => {
        const id = event.target.id;
        const input = event.target.value;
        switch (id) {
            case "email":
                setEmail(input)
                break;
            case "pw":
                setPw(input)
                break;

            default: console.log("Log In Input from LogIn.js ran through without effect")
        }
    };

    return (
        <div className="input-form">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid-container">
                    <label htmlFor="email">
                        <span className="required">*</span>Email
                    <input type="text" id="email" placeholder="Email" onChange={handleFormInput} />
                    </label>
                    <label htmlFor="pw">
                        <span className="required">*</span>Password
                    <input type="text" id="pw" placeholder="Password" onChange={handleFormInput} />
                    </label>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Log In" /><span className="required">* Required</span>
                </div>
            </form>
        </div>
    )
}
