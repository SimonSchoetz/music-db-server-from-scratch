import React, { useState } from 'react'

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPW] = useState("");
    const [role, setRole] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const handleSubmit = event => {
        event.preventDefault()

        //POST request
        const body = {
            "firstName": firstName,
            "lastName": lastName,
            "userName": userName,
            "email": email,
            "pw": pw,
            "role": role,
            "street": street,
            "city": city,
            "country": country
        };

        const postData = async (url, data) => {

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    // "Accept": "application/json",
                    "Content-Type": "application/json",
                    // "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwMTkyMjI0MzAzZDJmNTAyM2FiM2EiLCJpYXQiOjE1ODg1OTkwNzR9.u3oGxeRLOMgILOwWG1VsuJWCEAtkz4G1EbYSQgE5ObY"
                },
                body: JSON.stringify(data)
            })
            return response.json()
        }
        postData("http://localhost:3000/users", body)
            .then(data => { console.log(data) })
        //reset form
        /////////////////////////////////////////////
        ////// TO DO IF THERE IS NO ERROR, THEN RESET
        /////////////////////////////////////////////
        setFirstName("");
        setLastName("");
        setUserName("");
        setEmail("");
        setPW("");
        setRole("");
        setStreet("");
        setCity("");
        setCountry("");
    }



    const handleFormInput = event => {
        const id = event.target.id;
        const input = event.target.value;
        switch (id) {
            case "firstName":
                setFirstName(input)
                break;
            case "lastName":
                setLastName(input)
                break;
            case "userName":
                setUserName(input)
                break;
            case "email":
                setEmail(input)
                break;
            case "pw":
                setPW(input)
                break;
            case "role":
                setRole(input)
                break;
            case "street":
                setStreet(input)
                break;
            case "city":
                setCity(input)
                break;
            case "country":
                setCountry(input)
                break;
            default: console.log("Sign up Input in SignUp.js ran through without effect")
        }
    };


    return (
        <div className="input-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid-container">
                    <label htmlFor="firstName">
                        <span className="required">*</span>First Name
                    <input type="text" id="firstName" placeholder="First Name" onChange={handleFormInput} />
                    </label>
                    <label htmlFor="lastName">
                        <span className="required">*</span>Last Name
                    <input type="text" id="lastName" placeholder="Last Name" onChange={handleFormInput} />
                    </label>
                    <label htmlFor="userName">
                        <span className="required">*</span>User Name
                    <input type="text" id="userName" placeholder="User Name" onChange={handleFormInput} />
                    </label>
                    <label htmlFor="email">
                        <span className="required">*</span>Email
                    <input type="text" id="email" placeholder="Email" onChange={handleFormInput} />
                    </label>
                    <label htmlFor="pw">
                        <span className="required">*</span>Password
                    <input type="text" id="pw" placeholder="At least 8 signs long" onChange={handleFormInput} />
                    </label>
                    <label htmlFor="role">
                        <span className="required">*</span>Role
                    <input type="text" id="role" placeholder="Role" onChange={handleFormInput} />
                    </label>
                    <label htmlFor="street">
                        Street
                    <input type="text" id="street" placeholder="Street" onChange={handleFormInput} />
                    </label>
                    <label htmlFor="city">
                        City
                    <input type="text" id="city" placeholder="City" onChange={handleFormInput} />
                    </label>
                    <label htmlFor="country">
                        Country
                    <input type="text" id="country" placeholder="Country" onChange={handleFormInput} />
                    </label>


                </div>
                <div className="submit-button">
                    <input type="submit" value="Sign Up" /><span className="required">* Required</span>
                </div>
            </form>
        </div>
    )
}
