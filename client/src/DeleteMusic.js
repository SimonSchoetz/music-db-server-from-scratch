import React from 'react'


export default function DeleteMusic(checkedIDs) {

    checkedIDs.map(id => {

        const deleteData = async (url, data) => {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwMTkyMjI0MzAzZDJmNTAyM2FiM2EiLCJpYXQiOjE1ODg1OTkwNzR9.u3oGxeRLOMgILOwWG1VsuJWCEAtkz4G1EbYSQgE5ObY"
                },
                // body: JSON.stringify(data)
            })
            return response.json()
        }
        deleteData(`http://localhost:3000/music/${id}`)
            .then(data => {
                if (data.success) {
                    alert("Successfully deleted data")
                } else {
                    console.log(data)
                }
            })

    })
}
