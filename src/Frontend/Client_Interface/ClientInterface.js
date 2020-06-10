import React from 'react';
import Menu from "./Components/Menu/Menu";
import Chat from "./Components/Chat/Chat";
import "./Clientinterface.css";

class ClientInterface extends React.Component {

    render() {
        return (
            <div className={"clientInterface"}>

                    <Menu className={"Menu"}/>
                    <Chat setNick={this.props.setNick}
                          nick={this.props.nick}
                          sendMessage={this.props.sendMessage}
                          setSend={this.props.setSend}
                          message={this.props.message}
                          openWS={this.props.openWS} className={"Chat"}/>

            </div>
        )
    }
}

export default ClientInterface;