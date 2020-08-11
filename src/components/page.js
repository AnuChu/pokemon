import React from 'react';
import AllCard from "./allCard";
import CardPokemon from "./cardPokemon";
import {BrowserRouter, Route} from "react-router-dom";
import '../css/main.css';
import Search from "./Search";


const Page = () => {
    return (
        <div className={"container"}>
            <div className={"main"}>
                <BrowserRouter>
                    <Search/>
                    <Route exact path="/" component={AllCard}/>
                    <Route exact path="/CardPokemon" component={CardPokemon}/>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default Page;