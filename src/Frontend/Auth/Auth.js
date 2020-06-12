import React from 'react';
import "./Auth.css";
import Header from "./Auth_Components/Header/Header";
import FormLogin from "./Auth_Components/FormLogin/FormLogin";

class Auth extends React.Component {

    render() {
        return (
            <div className={"Auth"}>
                <Header/>
                <div className={"Content_start_page"}>
                    <p>CONTENT</p>
                </div>
                <FormLogin setNick={this.props.setNick} openWS={this.props.openWS}/>
            </div>
        );
    }
}

export default Auth;