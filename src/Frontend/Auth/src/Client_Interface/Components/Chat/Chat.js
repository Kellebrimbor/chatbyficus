import React from 'react';
import Textarea from "../../../Components/Textarea/Textarea";
import "./Chat.css"
import Websocket from 'react-websocket';



class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            send: "",
            message: "",
        }
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendList() {
        this.setState({message: this.state.message + this.state.send + "\n"});
        this.setState({send: ""});
    }

    sendEmail(message) {
        console.log(message);
        this.setState({message: this.state.message + this.state.send + "\n"});
        document.getElementById('enter').value = '';
    }

    render() {
        return (
            <div className={this.props.className}>
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