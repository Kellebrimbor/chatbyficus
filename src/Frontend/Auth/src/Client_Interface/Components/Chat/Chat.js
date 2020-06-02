import React from 'react';
import Textarea from "../../../Components/Textarea/Textarea";
import "./Chat.css"
import {IP} from "../../../../../const";



class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            send: "",
            message: "",

            nick: ""
        }
        this.sendEmail = this.sendEmail.bind(this);
        this.openWS=this.openWS.bind(this);
        this.sendMessage=this.sendMessage.bind(this);
    }
    openWS() {
        let ws="";
        ws= new WebSocket("ws://" + IP.IP + ":8000/?user=" + this.state.nick);
         ws.onmessage=(evt)=>{evt.data};
    }
    sendList() {
        this.setState({message: this.state.message + this.state.send + "\n"});
        this.setState({send: ""});
    }

    sendEmail(message) {
        console.log(message);
        this.setState({message: this.state.message + this.state.send + "\n"});
        this.sendMessage();
        document.getElementById('enter').value = '';
    }
     sendMessage() {
        this.state.ws.send(this.state.send);

    }

    render() {
        return (
            <div className={this.props.className}>
                <div>
                    <p>Введите логин</p>
                    <Textarea className={"Textareaa"} onChange={(e) => {
                        this.setState({nick: e.target.value});
                    }}/>
                    <input type={"button"} value={"отправить"} onClick={this.openWS}/>
                    {/*<button onClick={this.sendLogin}>Войти</button>*/}
                </div>
                <div className={"Email"}>
                    <Textarea disabled={"disabled"} value={this.state.message}/>
                </div>
                <div className={"Enter_email"}>
                    <Textarea
                        placeholder={"Введите сообщение..."}
                        id={"enter"}
                        onChange={(e) => {
                            this.setState({send: e.target.value});
                        }}/>
                </div>
                <div className={"send_email"}>
                    <button value={this.props.nick}/>
                    <button>{"\u{1F60A}"}</button>
                    <button onClick={this.sendEmail}>отправить</button>
                </div>
            </div>
        );
    }
}

export default Chat;