
import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import SearchRoom from "./SearchRoom";
import {useEffect} from "react";
import data from "../cards";

export const Content = () => {

    useEffect(() => {

    },[])
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/room" >
                    <SearchRoom  cards={data.data.cards}/>
                </Route>
                {/*<Route path="/room/:details"></Route>*/}
            </Switch>
        </main>
    );
};