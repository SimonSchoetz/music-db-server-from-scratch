import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function MusicDetail(props) {
    const [musicData, setMusicData] = useState([]);
    const param = props.match.params.id

    useEffect(() => {
        fetch(`http://localhost:3000/music/${param}`)
            .then(res => res.json())
            .then(data => setMusicData(data.music))
    }, [])
    console.log(musicData)

    const renderLi = (musicData) => {
        if (musicData.status === 404) return (<h2>Error 404, something went wrong</h2>)
        if (musicData.length === 0) return null;
        return (
            <ul className="list-right">
                <li>{musicData.album}</li>
                <li>{musicData.label}</li>
                <li>{musicData.release.substring(0, 10)}</li>
            </ul>
        )

    };



    return (
        <div className="music-details-page">
            <h2>{musicData.title} by {musicData.artist}</h2>
            <div className="music-details">
                <ul>
                    <li>Album/EP: </li>
                    <li>Released on: </li>
                    <li>Released at: </li>
                </ul>
                {renderLi(musicData)}
            </div>
            <a target="_blank" href={musicData.link}>Purchase/Download </a>
            <img src={musicData.img} />
            <Link musicData={musicData} to={`/${param}/edit`}>Edit</Link>
        </div>
    )
}
