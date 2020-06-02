import React from 'react';
class Menu extends React.Component{
    render(){
        return(
            <div className={this.props.className}>
            <a href={"Chat"}>сообщения</a>
            </div>
        )
    }
}
export default Menu;