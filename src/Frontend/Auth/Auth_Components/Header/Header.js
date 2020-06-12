import React from 'react';
import "./Header.css";
import headerImage from "./chat.png";

class Header extends React.Component {
    render() {
        return (
            <div className={"Header"}>
                <div id={"logodiv"} >
                    <img  src={headerImage} id={"logo"} alt={"logo"} />
                </div>
                <div >
                    <p>Первый в мире сервис, предоставляющий собственный мессенджер для частных компаний</p>
                </div>
            </div>
        )
    }
}

export default Header;