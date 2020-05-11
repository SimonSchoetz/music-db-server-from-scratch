import React, { useState } from 'react'

export default function InputFormMusic() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("Busted Fingerz");
    const [album, setAlbum] = useState("");
    const [label, setLabel] = useState("Self-Release");
    const [release, setRelease] = useState("");
    const [link, setLink] = useState("");
    const [img, setImg] = useState("");

    const handleSubmit = event => {
        event.preventDefault()



        //reset form
        setTitle("");
        setArtist("Busted Fingerz");
        setAlbum("");
        setLabel("Self-Release");
        setRelease("");
        setLink("");
        setImg("");
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
        <div>
            <h2>Post Music</h2>
            <form className="post-music" onSubmit={handleSubmit}>
                <label htmlFor="title">
                    <span className="required">*</span>Title
                    <input type="text" id="title" placeholder="Title" onChange={handleFormInput} />
                </label>
                <label htmlFor="artist">
                    <span className="required">*</span>Artist
                    <input type="text" id="artist" placeholder="Artist" value={artist} onChange={handleFormInput} />
                </label>
                <label htmlFor="album">
                    Album
                    <input type="text" id="album" placeholder="Album" onChange={handleFormInput} />
                </label>
                <label htmlFor="label">
                    <span className="required">*</span>Label
                    <input type="text" id="label" placeholder="Label" value={label} onChange={handleFormInput} />
                </label>
                <label htmlFor="release">
                    <span className="required">*</span>Release Date
                    <input type="text" id="release" placeholder="yyy-mm-dd" onChange={handleFormInput} />
                </label>
                <label htmlFor="link">
                    <span className="required">*</span>Purchase/Download Link
                    <input type="text" id="link" placeholder="Link" onChange={handleFormInput} />
                </label>
                <label htmlFor="img">
                    Image Link
                    <input type="text" id="img" placeholder="Link to artwork" onChange={handleFormInput} />
                </label>
                <div>
                    <input type="submit" value="Save" /><span className="required">* Required</span>
                </div>
            </form>
        </div>
    )
}
