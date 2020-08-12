import React, {useState, useEffect } from 'react';
import '../css/main.css';
import {Link} from "react-router-dom";
import Loading from "./loading";

const CardPokemonMini = () => {

    const [data, setData] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
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

    // для нахождения картинки, т.к на оф.сайте они 001, 010, 100 и т.д ( а не просто 1, 2, 3)
        const imageUrl = (url) =>{
            if ((url.slice(34).slice(0, -1)) < 10) {return "00"+url.slice(34)}
            else if ((url.slice(34).slice(0, -1)) < 100) {return "0"+url.slice(34)}
            else return (url.slice(34).slice(0, -1))

            // const url = 'https://pokeapi.co/api/v2/pokemon';
            // const id = url.substring(url.lastIndexOf('/') + 1);
        }
        // для нахождения id покемона по url
const pokemoId = (url) => {
    let n = url.slice(34).slice(0, -1);
    return  n
}

    if (fetching) {return(<Loading />)}
    else
    return (
        <div className={"card-mini-block"}>
                {data.results.map(data =>
                <div className={"card-mini"}>
                    <Link to ={`/Pokemon/${pokemoId(data.url)}`}>
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