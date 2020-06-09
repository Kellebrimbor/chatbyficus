import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ClientInterface from "./Client_Interface/ClientInterface";
import Auth from "./Client_Interface/Auth/Auth";
import {WP} from "./const";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            nick: "",
            send: ""
        }
        this.ws = null;
        this.openWS = this.openWS.bind(this);
        this.setNick = this.setNick.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.setSend = this.setSend.bind(this);
    }

    setSend(sent) {
        this.setState({send: sent});
    }

    setNick(name) {
        this.setState({nick: name});
    }

    openWS() {
        this.ws = new WebSocket(WP.wp + this.state.nick);
        console.log(this.state.message);
        this.ws.onmessage = (message) => {
            this.setState({message: this.state.message + message.data + "\n"})
        };
    }

    sendMessage() {
        this.ws.send(this.state.nick + "\n" + this.state.send);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <Auth setNick={this.setNick} openWS={this.openWS}/>
                    </Route>
                    <Route exact path={"/chat"}>
                        <ClientInterface setNick={this.setNick}
                                         nick={this.state.nick}
                                         openWS={this.openWS}
                                         sendMessage={this.sendMessage}
                                         setSend={this.setSend}
                                         message={this.state.message}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;