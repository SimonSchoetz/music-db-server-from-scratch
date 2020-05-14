import React from 'react'

export default function Home() {
    return (
        <div className="landing-page">
            <div>
                <h2>Home</h2>
                <p>The purpose of this page is to showcase all of my music at one place.</p>
                <h3>What does it do</h3>
                <ul>
                    <li>Show a list with all music entries</li>
                    <li>Option to delete single and multiple entries at once</li>
                    <li>Add new music</li>
                    <li>Show detailed card with option to edit</li>
                </ul>
                <ul>
                    <li>Has a Sign Up form</li>
                    <li>Has a Log In form</li>
                </ul><h3>What will it do in the future</h3>
                <ul>
                    <li>Remember logged in user via cookie</li>
                    <li>Only show add/edit/delete options to admin roles</li>
                    <li>Unreleased music entries only for confirmed artists</li>
                    <li>Sort the db by clicking on title/artist/label/release date</li>
                    <li>Smarter Code (e.g. add item/edit item are 2 files but the same input form)</li>
                </ul>
            </div>
        </div>
    )
}
