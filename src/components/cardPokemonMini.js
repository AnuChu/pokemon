import React, {useState, useEffect } from 'react';
import '../css/main.css';
import {Link} from "react-router-dom";

const CardPokemonMini = () => {

    const [data, setData] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setData(data)
                setFetching(false)
            })
            .catch(error => alert(error))
    }, []);

        const imageUrl = (url) =>{
            if ((url.slice(34).slice(0, -1)) < 10) {return "00"+url.slice(34)}
            else if ((url.slice(34).slice(0, -1)) < 100) {return "0"+url.slice(34)}
            else return (url.slice(34).slice(0, -1))

    }

    if (fetching) {return(<h1>loading</h1>)}
    else
    return (

        <div className={"card-mini-block"}>
                {data.results.map(data =>
                <div className={"card-mini"}>
                    <Link to ="/CardPokemon">
                    <div className={"card-mini-title"}>
                        {data.name}
                    </div>
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(imageUrl(data.url).slice(0, -1))}.png`} alt=""/>
                    </Link>
                    <div className={"card-mini-type"}>
                        <div className={"mini-type-grass"}><img src="/img/types/grass.png" alt=""/> </div>
                        <div className={"mini-type-poison"}><img src="/img/types/poison.png" alt=""/> </div>
                    </div>
                </div>
                )}
        </div>
    )
}
export default CardPokemonMini;