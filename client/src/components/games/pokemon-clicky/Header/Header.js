//Importing React Components
import React from "react";
import logo from '../img/pokeball.png';
import "./Header.css";
// import Sound from 'react-sound';

//Header Div
const Header = props => (
    <div className="header">
        <header className="header-header">
            {/* <img src={logo} className="header-logo" alt="logo" /> */}
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">PoKéMoN Clicky Game</h1>
        </header>
        
        <br></br>

    </div>
);

// Play Sound
// soundRender() ;{
//     return (
//       <Sound
//       url={"../../sfx/win.mp3"}
//       playStatus={Sound.status.PLAYING}
//       onLoading={this.handleSongLoading}
//       onPlaying={this.handleSongPlaying}
//       onFinishedPlaying={this.handleSongFinishedPlaying}
//       />
//      );
//     }
   

//Export Component for Use in the Rest of Application.
export default Header;
