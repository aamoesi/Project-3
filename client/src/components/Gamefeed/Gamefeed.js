// NOTE: This file will feed brain games from other developers.  More to come.

import React from "react";
import { Link } from "react-router-dom";
import "./Gamefeed.css";

const Gamefeed = props => (
    // <div className="game-thumb">
    //     <a href="https://cdn.htmlgames.com/MergeIt/" target="_blank"><img src="https://www.htmlgames.com/uploaded/thumb500/mergeit500.jpg"></a>
    // </div>
    <div className="game-thumb">
        <Link to="/games/mergeit">
            <img
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src='https://www.htmlgames.com/uploaded/thumb500/mergeit500.jpg'
            />
        </Link>
        <Link to="/games/1010hex">
            <img
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src='https://www.htmlgames.com/uploaded/thumb500/1010hex500.jpg'
            />
        </Link>
        <Link to="/games/mainpower">
            <img
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src='https://cdn.htmlgames.com/MainPower/img/icon/image-300x200.jpg'
            />
        </Link>
    </div>
);

export default Gamefeed;