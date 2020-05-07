import React, { useState, useEffect } from 'react';

export default function MusicList() {





    const renderLi = (el, i) => {

        return (
            <li key={i}>
                <ul>
                    <li><button onClick={() => console.log()}>click me</button>   </li>
                    <li>Title: {}</li>
                    <li>Artist: {}</li>
                    <li>Label:{}</li>
                    <li>Release Date:{}</li>
                </ul>
            </li>
        )
    };

    return (
        <div>
            <h2>List Of Music</h2>
            <ul>
                {renderLi()}
            </ul>
        </div>
    )
};
