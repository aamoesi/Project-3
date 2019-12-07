import React from "react"
import "./twitch.css"

class Twitch extends React.Component {

    state={
        showtwitch:false

    }
    handleClick=()=>{
        console.log("clicked")
        this.setState((state)=> ({
            showtwitch:!state.showtwitch
        }));
    }

    render() {
        return (
            <div> 
                 <button onClick={this.handleClick}className="bottomright-fixed"type="button">Live Stream</button> 
                    {this.state.showtwitch
                    ?<p>
                    
                   <iframe src="https://player.twitch.tv/?channel=dajjma"
 frameborder="0"  layout="video-with-chat" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                    </p>
                    
                    :<></>
                    }
            </div>

        )
    }
}

export default Twitch