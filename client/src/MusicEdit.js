import React, { useState, useEffect } from 'react'

export default function MusicEdit(props) {

    const [musicData, setMusicData] = useState({})
    const id = props.match.params.id
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [label, setLabel] = useState("");
    const [release, setRelease] = useState("");
    const [link, setLink] = useState("");
    const [img, setImg] = useState("");
    useEffect(() => {
        fetch(`http://localhost:3000/music/${id}`)
            .then(res => res.json())
            .then(data => {
                setMusicData(data.music);
                setArtist(data.music.artist);
                setTitle(data.music.title);
                setAlbum(data.music.album);
                setLabel(data.music.label);
                setRelease(data.music.release);
                setLink(data.music.link);
                setImg(data.music.img);
            })
    }, [])
    const handleSubmit = event => {
        event.preventDefault()

        //POST request
        const body = {
            "title": title,
            "artist": artist,
            "album": album,
            "label": label,
            "release": release,
            "link": link,
            "img": img
        };

        const postData = async (url, data) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIwMTkyMjI0MzAzZDJmNTAyM2FiM2EiLCJpYXQiOjE1ODg1OTkwNzR9.u3oGxeRLOMgILOwWG1VsuJWCEAtkz4G1EbYSQgE5ObY"
                },
                body: JSON.stringify(data)
            })
            return response.json()
        }
        postData("http://localhost:3000/music/post", body)
            .then(data => { resetForm(data) })

        const resetForm = (data) => {
            if (data.success) {
                setTitle("");
                setArtist("Busted Fingerz");
                setAlbum("");
                setLabel("Self-Release");
                setRelease("");
                setLink("");
                setImg("");
                alert("Item was successfully added to database")
            } else {
                alert(data.err)
            }
            console.log(data)
        }
    }
    const handleFormInput = event => {
        const id = event.target.id;
        const input = event.target.value;
        switch (id) {
            case "title":
                setTitle(input)
                break;
            case "artist":
                setArtist(input)
                break;
            case "album":
                setAlbum(input)
                break;
            case "label":
                setLabel(input)
                break;
            case "release":
                setRelease(input)
                break;
            case "link":
                setLink(input)
                break;
            case "img":
                setImg(input)
                break;
            default: console.log("Music Input HandleFormInput ran through without effect")
        }
    };

    return (
        <div className="input-form">
            <h2>This is Music Edit</h2>
            <form className="post-music" onSubmit={handleSubmit}>
                <div className="grid-container">
                    <label htmlFor="title">
                        <span className="required">*</span>Title
                    <input type="text" id="title" placeholder="Title" value={title} onChange={handleFormInput} />
                    </label>
                    <label htmlFor="artist">
                        <span className="required">*</span>Artist
                    <input type="text" id="artist" placeholder="Artist" value={artist} onChange={handleFormInput} />
                    </label>
                    <label htmlFor="album">
                        Album
                    <input type="text" id="album" placeholder="Album" value={album} onChange={handleFormInput} />
                    </label>
                    <label htmlFor="label">
                        <span className="required">*</span>Label
                    <input type="text" id="label" placeholder="Label" value={label} onChange={handleFormInput} />
                    </label>
                    <label htmlFor="release">
                        <span className="required">*</span>Release Date
                    <input type="text" id="release" placeholder="yyyy-mm-dd" value={release} onChange={handleFormInput} />
                    </label>
                    <label htmlFor="link">
                        <span className="required">*</span>Purchase/Download Link
                    <input type="text" id="link" placeholder="Link" value={link} onChange={handleFormInput} />
                    </label>
                    <label htmlFor="img">
                        Image Link
                    <input type="text" id="img" placeholder="Link to artwork" value={img} onChange={handleFormInput} />
                    </label>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Save" /><span className="required">* Required</span>
                </div>
            </form>
        </div>
    )
}
