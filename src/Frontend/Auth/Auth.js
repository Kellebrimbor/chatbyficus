import React from 'react';
import Textarea from "./src/Components/Textarea/Textarea";
import "./Auth.css";
import {IP} from "../const";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ws: "",
            nick: ""
        }
        this.sendLogin = this.sendLogin.bind(this);
        this.openWS=this.openWS.bind(this);
    }

    sendLogin() {
    this.openWS();
        location.href="ws://" + IP.IP+"/chat" +":8000/?user=" +this.state.nick;

    }

    openWS() {
        this.setState({ws: new WebSocket("ws://" + IP.IP + ":8000/?user=" + this.state.nick)});

    }

    render() {
        return (
            <div>
                <p>Введите логин</p>
                <Textarea className={"Textareaa"} onChange={(e) => {
                    this.setState({nick: e.target.value});
                }}/>
                <input type={"button"} value={"отправить"} onClick={this.openWS}/>
                <a href={this.state.ws+"/chat"}>чат</a>
                {/*<button onClick={this.sendLogin}>Войти</button>*/}
            </div>
        );
    }
}

export default Auth;