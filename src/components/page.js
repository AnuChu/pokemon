import React from 'react';
import AllPokemon from "./Cards/allPokemon";
import {BrowserRouter, Link, Route} from "react-router-dom";
import '../css/main.css';
import Input from "./InputSearch/input";
import Types from "./TypesSearch/types";
import CardPokemon from "./Cards/cardPokemon";
import AllTypes from "./Cards/allTypes";


const Page = () => {
    return (
        <div className={"container"}>
            <div className={"main"}>
                <BrowserRouter>
                    <div className={"logo"}>
                        <Link to={"/"}><img src="/img/logo.png" alt=""/></Link>
                    </div>
                    <Input/>
                    <Types/>
                    <Route exact path="/" component={AllPokemon}/>
                    <Route exact path="/Types/:id" component={AllTypes}/>
                    <Route exact path="/Pokemon/:id" component={CardPokemon}/>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default Page;