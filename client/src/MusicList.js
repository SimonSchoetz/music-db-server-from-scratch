import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import deleteMusic from "./MusicDelete"

export default function MusicList() {

    const [checkedIDs, setCheckedIDs] = useState([]);
    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/music")
            .then(res => res.json())
            .then(data => setMusicData(data.music))
    }, [])
    //list item construction
    const renderLi = (musicData) => {
        if (musicData.status === 404) return (<h2>Error 404, something went wrong</h2>)
        if (!musicData) return null; //Because first time the code is running, musicData will be an empty array
        // console.log(musicData.music[0].release.getDay())
        return musicData.map((el, i) => (


            <li key={i}>
                <ul className="music-list">
                    <li>{el.title/*Make it link to lead to details*/}</li>
                    <li>{el.artist}</li>
                    <li>{el.album}</li>
                    <li>{el.label}</li>
                    <li>{el.release.substring(0, 10)}</li>
                    <li><input className="check-delete" name={el._id} type="checkbox" onChange={handleIDs}></input></li>
                </ul>
            </li >
        ));
    };
    //Add ID's to array which will get passed to DeleteMusic by the Delete Checked button
    const handleIDs = (event) => {
        const checked = event.target.checked
        const id = event.target.name
        if (checked) {
            setCheckedIDs([...checkedIDs, id])
        }
        if (!checked) {
            const filteredIDs = checkedIDs.filter(el => el !== id);
            setCheckedIDs(filteredIDs)
        }
    }

    //Delete the deleted Item from musicData to make it disappear without refreshing the page
    const handleDelete = (checkedIDs) => {
        //prevent error when nothing is selected
        if (checkedIDs.length === 0) {
            return
        }

        //filter copy of music data based on checkedID and set the new state

        let filteredMusicData = [...musicData];
        for (let i = 0; i < checkedIDs.length; i++) {
            filteredMusicData = filteredMusicData.filter(el => el._id !== checkedIDs[i]);
        }
        setMusicData(filteredMusicData)
        //delete from db
        deleteMusic(checkedIDs)

        //reset Array of checkedID's
        setCheckedIDs([]);
    }


    return (
        <div className="music-list-page">
            <div>
                <h2>List Of Music</h2>
                <div className="music-menu">
                    <Link to="/music/post"> Add New Track </Link>
                </div>
                <ul className="list-header">
                    <li><h3>Title</h3></li>
                    <li><h3>Artist</h3></li>
                    <li><h3>Album/EP</h3></li>
                    <li><h3>Label</h3></li>
                    <li><h3>Release Date</h3></li>
                </ul>
                <ul>
                    {renderLi(musicData)}
                </ul>
                <div className="delete-btn">
                    <button type="button" onClick={() => handleDelete(checkedIDs)}>Delete Checked</button>
                </div>
            </div>
        </div>

    )
};
