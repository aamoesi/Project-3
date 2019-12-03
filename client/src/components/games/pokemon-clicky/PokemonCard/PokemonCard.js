//Importing React Components
import React from "react";
import "./PokemonCard.css";
// import UIfx from './uifx'
// import winMp3 from "../../sfx/win.mp3"


//Image Cards Div
const PokemonCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPokemon(props.pkmn)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.pkmn} src={props.image} />
            </a>
        </div>
    </div>
);

// Sound Effects (SFX)

// const win = new UIfx(winMp3)
// <button onClick={beep.play}>Signup</button>


//Export Component for Use in the Rest of Application.
export default PokemonCard;
