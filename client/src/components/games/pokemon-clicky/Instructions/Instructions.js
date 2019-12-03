//Importing React Components
import React from "react";
import "./Instructions.css";

//Instruction Div
const Instructions = props => (
    <div className="instructionsbox">
        {/* <h1>Pokemon Memory game!</h1> */}
        <p>Trainer!  Click on PoKéMoN, but not on the same one twice.</p>
    </div>
);

//Export Component for Use in the Rest of Application.
export default Instructions;