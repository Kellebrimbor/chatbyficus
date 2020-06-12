import React from 'react';
import Textarea from "../Components/Textarea/Textarea";
import "./Auth.css";
import {Link} from "react-router-dom";
import Header from "./Auth_Components/Header/Header";

class Auth extends React.Component {

    render() {
        return (
            <div className={"Auth"}>
                <Header/>
                <div className={"Content_start_page"}>
                    CONTENT
                </div>
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
                            <form onSubmit={this.props.openWS}>
                                <input type={"button"} value={"отправить"} onClick={() => {
                                    this.props.openWS();
                                    document.getElementById("Link").click()
                                }}/>
                                <Link to={"/chat"} id={"Link"}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;