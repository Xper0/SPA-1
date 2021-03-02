
import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import SearchRoom from "./SearchRoom";


export const Content = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/room" component={SearchRoom}></Route>
                {/*<Route path="/room/:details"></Route>*/}
            </Switch>
        </main>
    );
};