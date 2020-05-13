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
            <ul>
                <li>{musicData.title}</li>
                <li>{musicData.artist}</li>
                <li>{musicData.album}</li>
                <li>{musicData.label}</li>
                <li>{musicData.release.substring(0, 10)}</li>
                <li><Link to={musicData.link}>Purchase/Download </Link></li>
                <li><img src={musicData.img} /> </li>

            </ul>
        )

    };



    return (
        <div>
            <h2>This is music Detail</h2>
            {renderLi(musicData)}
        </div>
    )
}
