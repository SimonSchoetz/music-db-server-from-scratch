import React, { useState, useEffect } from 'react'

export default function MusicDetail(props) {
    const [musicData, setMusicData] = useState([]);
    const param = props.match.params.id

    useEffect(() => {
        fetch(`http://localhost:3000/music/${param}`)
            .then(res => res.json())
            .then(data => setMusicData(data.music))
    }, [])

    console.log(musicData)
    return (
        <div>
            <h2>This is music Detail</h2>
        </div>
    )
}
