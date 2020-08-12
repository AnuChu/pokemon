import React from 'react';
import AllCard from "./allCard";
import Pokemon from "./Pokemon";
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
                    <Route exact path="/Pokemon/:id" component={Pokemon}/>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default Page;