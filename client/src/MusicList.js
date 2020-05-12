import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MusicList() {


    const [musicData, setMusicData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/music")
            .then(res => res.json())
            .then(data => setMusicData(data))
    }, [])


    const renderLi = (musicData) => {
        if (musicData.status === 404) return (<h2>Error 404, something went wrong</h2>)
        if (!musicData.music) return null; //Because first time the code is running, musicData will be an empty array
        // console.log(musicData.music[0].release.getDay())
        return musicData.music.map((el, i) => (


            <li key={i}>
                <ul className="music-list">
                    <li>{el.title/*Make it link to lead to details*/}</li>
                    <li>{el.artist}</li>
                    <li>{el.label}</li>
                    <li>{el.release.substring(0, 10)}</li>
                    <li><input className="check-delete" type="checkbox"></input></li>
                    {/* <li>{el._id}</li> */}
                </ul>
            </li >


        ));

    };

    return (

        <div className="music-list-page">
            <div>
                <h2>List Of Music</h2>
                <div className="music-menu">
                    <Link to="/music/post"> Add New Track </Link>

                    <button value="Delete">Delete Checked</button>
                </div>
                <ul className="list-header">
                    <li><h3>Title</h3></li>
                    <li><h3>Artist</h3></li>
                    <li><h3>Label</h3></li>
                    <li><h3>Release Date</h3></li>
                </ul>
                <ul>
                    {renderLi(musicData)}
                </ul>
            </div>
        </div>

    )
};
