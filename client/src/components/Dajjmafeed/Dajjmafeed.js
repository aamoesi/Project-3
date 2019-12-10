// NOTE: This file will feed brain games from DAJJMA!  More to come.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import twoDeeTicTacToeThumb from "../../img/2d-tic-tac-toe-thumb.png";
import twoDeeTicTacToeGif from "../../gif/2d-tic-tac-toe.gif";
import tetrisThumb from "../../img/tetris-thumb.png";
import tetrisGif from "../../gif/tetris.gif";
import pokemonClickyThumb from "../../img/pokemon-clicky-thumb.png";
import pokemonClickyGif from "../../gif/pokemon-clicky.gif";


const Dajjmafeed = props => {

    const [activeGif, setActiveGif] = useState( null );

    const gifSwitch = (event) => {

        setActiveGif( event.currentTarget.getAttribute("src") )
        // console.log(event.currentTarget.getAttribute("src"))

    }
    
    return (
    // Games Produced by DAJJMA!
    <div className="game-thumb">
        <Link to="/Game1">
            <img
                onMouseEnter={ gifSwitch }
                onMouseLeave={ () => setActiveGif(null)}
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src={ activeGif === twoDeeTicTacToeThumb ? twoDeeTicTacToeGif : twoDeeTicTacToeThumb }
            />
        </Link>
        <Link to="/Game2">
            <img
                onMouseEnter={ gifSwitch }
                onMouseLeave={ () => setActiveGif(null)}
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src= { activeGif === tetrisThumb ? tetrisGif : tetrisThumb }
            />
        </Link>
        <Link to="/pokemon-clicky">
            <img
                onMouseEnter={ gifSwitch }
                onMouseLeave={ () => setActiveGif(null)}
                style={{ width: 300, height: 200, padding: 15, borderRadius: 25 }}
                src={ activeGif === pokemonClickyThumb ? pokemonClickyGif : pokemonClickyThumb }
            />
        </Link>
    </div>
    )
    };

export default Dajjmafeed;