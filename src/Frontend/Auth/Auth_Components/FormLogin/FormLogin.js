import React from 'react';
import {Link} from "react-router-dom";
import "./FormLogin.css"

class FormLogin extends React.Component {
    render() {
        return (
            <div className={"formLogin"}>
                <div className={"HelloText"}>
                    <p>Рандомное приветствие для долбоебов, пользующихся этим</p>
                    <p>Введите логин</p>
                </div>
                <div className={"inputLogin"}>
                    <input type={"text"} placeholder={"Введите логин"} onChange={(e) => {
                        this.props.setNick(e.target.value);
                    }}/>
                    <input type={"password"} placeholder={"Введите пароль"}/>
                    <input type={"button"} value={"отправить"} onClick={() => {
                        this.props.openWS();
                        document.getElementById("Link").click();
                    }}/>
                    <Link to={"/chat"} id={"Link"}/>
                    <Link to={"/registration"} id={"reg"}/>
                </div>
                <div className={"registration"}>
                    <p>первый раз на нашем сайте?</p>
                    <button onClick={() => {
                        document.getElementById("reg").click();
                    }}>
                        Регистрация
                    </button>
                </div>
            </div>
        );
    }
}

export default FormLogin;