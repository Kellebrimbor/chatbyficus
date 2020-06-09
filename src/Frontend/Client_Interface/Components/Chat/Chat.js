import React from 'react';
import Textarea from "../../../Components/Textarea/Textarea";
import "./Chat.css"

class Chat extends React.Component {
// constructor(props){
//     super(props);
//     this.props.openWS(props.nick);
// }
    render() {
        return (
            <div className={this.props.className}>
                <div>
                    <p>Введите логин</p>
                    <Textarea className={"Textareaa"} onChange={(e) => {
                        this.props.setNick(e.target.value);
                    }}/>
                    <input type={"button"} value={"отправить"} onClick={this.props.openWS}/>
                </div>
                <div className={"Email"}>
                    <Textarea disabled={"disabled"} value={this.props.message}/>
                </div>
                <div className={"Enter_email"}>
                    <Textarea
                        placeholder={"Введите сообщение..."}
                        id={"enter"}
                        onChange={(e) => {
                            this.props.setSend(e.target.value);
                        }}/>
                </div>
                <div className={"send_email"}>
                    <button> {this.props.nick}</button>
                    <button>{"\u{1F60A}"}</button>
                    <button onClick={this.props.sendMessage}>отправить</button>
                </div>
            </div>
        );
    }
}

export default Chat;