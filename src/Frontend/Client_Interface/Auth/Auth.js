import React from 'react';
import Textarea from "../../Components/Textarea/Textarea";
import "./Auth.css";

class Auth extends React.Component {

    render() {
        return (
            <div className={"formLogin"}>
                <div>
                    <p>Рандомное приветствие, для долбоебов, пользующихся этим</p>
                    <p>Введите логин</p>
                    <div id={"inputLogin"}>
                        <Textarea onChange={(e) => {
                            this.props.setNick(e.target.value);
                        }}/>
                    </div>
                    <input type={"button"} value={"отправить"} onClick={this.props.openWS}/>

                </div>
            </div>
        )
            ;
    }
}

export default Auth;