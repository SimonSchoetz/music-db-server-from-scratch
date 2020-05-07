import React, { useState, useEffect } from 'react'

export default function UserList(props) {

    const [userData, setMusicData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(data => setMusicData(data))
    }, [])



    const renderLi = (userData) => {
        if (userData.status === 403) return (<h2>Sign Up || Log In</h2>)
        console.log(userData)
        if (!userData.users) return null; //Because first time the code is running, userData will be an empty array



        return userData.users.map((el, i) => (


            <li key={i}>
                <ul>
                    <li>First Name: {el.firstName}</li>
                    <li>Last Name: {el.lastName}</li>
                    <li>User Name: {el.userName}</li>
                    <li>Email: {el.email}</li>
                    <li>Role: {el.role}</li>
                </ul>
            </li>


        ));

    };
    return (
        <div>
            <h2>List Of Users</h2>
            <ul>
                {renderLi(userData)}
            </ul>
        </div>
    )
}
