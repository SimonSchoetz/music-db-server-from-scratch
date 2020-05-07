import React, { useState, useEffect } from 'react';

export default function MusicList() {


    const [musicData, setMusicData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/music")
            .then(res => res.json())
            .then(data => setMusicData(data))
    }, [])


    const renderLi = (musicData) => {

        if (!musicData.music) return null; //Because first time the code is running, musicData will be an empty array
        // console.log(musicData.music[0].release.getDay())
        return musicData.music.map((el, i) => (


            <li key={i}>
                <ul>
                    <li>Title: {el.title}</li>
                    <li>Artist: {el.artist}</li>
                    <li>Label: {el.label}</li>
                    <li>Release Date: {el.release.substring(0, 10)}</li>
                </ul>
            </li>


        ));

    };

    return (
        <div>
            <h2>List Of Music</h2>
            <ul>
                {renderLi(musicData)}
            </ul>
        </div>
    )
};
