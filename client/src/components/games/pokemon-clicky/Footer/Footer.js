//Importing React Components
import React from "react";
import "./Footer.css";

//Footer Div
const Footer = props => (
    <div className="footer">
        <p>Creator: <a href="https://phoenixafterglow.com" target="_blank">Phoenix Afterglow<sup>TM</sup></a> | <a href="https://github.com/PhoenixAfterglow/clickity-click" target="_blank">GitHub</a></p>
    </div>
);

//Export Component for Use in the Rest of Application.
export default Footer;