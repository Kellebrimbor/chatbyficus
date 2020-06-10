import React from 'react';
import Textarea from "../Components/Textarea/Textarea";
import "./Auth.css";
import {BrowserRouter, Link} from "react-router-dom";

class Auth extends React.Component {

    render() {
        return (
            <div className={"formLogin"}>

                <div>
                    <p>Рандомное приветствие для долбоебов, пользующихся этим</p>
                    <p>Введите логин</p>
                    <div className={"inputLogin"}>
                        <Textarea onChange={(e) => {
                            this.props.setNick(e.target.value);
                        }}/>
                    </div>
                    <div>
                        <input type={"button"} value={"отправить"} onClick={this.props.openWS}/>
                        <Link to={"/chat"}>chat</Link>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default Auth;