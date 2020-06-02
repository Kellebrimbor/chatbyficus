import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Chat from "./Client_Interface/Components/Chat/Chat";
import ClientInterface from "./Client_Interface/ClientInterface";
import Auth from "../Auth";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <Auth/>
                    </Route>
                    <Route exact path={"/chat"}>
                        <ClientInterface/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;