import React from 'react';
import Menu from "./Components/Menu/Menu";
import Chat from "./Components/Chat/Chat";
import "./Clientinterface.css";

class ClientInterface extends React.Component {

    render() {
        return (
            <div>
            <div>
                <Menu className={"Menu"}/>
                <Chat className={"Chat"}/>
            </div>
            </div>
        )
    }
}
export default ClientInterface;