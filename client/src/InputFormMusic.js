import React, { useState } from 'react'

export default function InputFormMusic() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [label, setLabel] = useState("");
    const [img, setImg] = useState("");
    const [release, setRelease] = useState("");

    const handleSubmit = event => {
        event.preventDefault()


        //reset form
        setTitle("");
        console.log(artist + " - " + title)
    }

    const handleFormInput = event => {
        const id = event.target.id;
        const input = event.target.value;
        switch (id) {
            case "title":
                setTitle(input)
            case "artist":
                setArtist(input)
        }
    }

    return (
        <div>
            <h2>Post Music</h2>
            <form className="post-music" onSubmit={handleSubmit}>
                <label htmlFor="title">
                    <input type="text" id="title" placeholder="Title" onChange={handleFormInput} />
                </label>
                <label htmlFor="artist">
                    <input type="text" id="artist" placeholder="Artist" onChange={handleFormInput} />
                </label>
                <input type="submit" value="ADD" />
            </form>
        </div>
    )
}
