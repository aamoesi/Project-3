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
                        frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                        
                   <iframe frameborder="0"
                    scrolling="no"
                    id="chat_embed"
                    src="https://www.twitch.tv/embed/dajjma/chat"
                    height="378"
                    width="350">
                    </iframe>
                    </p>
                    
                    :<></>
                    }
            </div>

        )
    }
}

export default Twitch