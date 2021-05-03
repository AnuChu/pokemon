import React, {useEffect, useState} from 'react';
import '../../css/main.css';
import Loading from "../loading";
import {Link} from "react-router-dom";

const AllTypes = (props) => {

    const [data, setData] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        console.log(props)
        fetch(`https://pokeapi.co/api/v2/type/${props.match.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data)
                setFetching(false)
            })
            .catch(error => alert(error))
    }, [props.match.params.id]);

// для нахождения картинки, т.к на оф.сайте они 001, 010, 100 и т.д ( а не просто 1, 2, 3)
    const imageUrl = (url) => {
        if ((url.slice(34).slice(0, -1)) < 10) {
            return "00" + url.slice(34)
        } else if ((url.slice(34).slice(0, -1)) < 100) {
            return "0" + url.slice(34)
        } else return (url.slice(34).slice(0, 4))

        // const url = https://pokeapi.co/api/v2/type
        // const url = 'https://pokeapi.co/api/v2/pokemon';
        // const id = url.substring(url.lastIndexOf('/') + 1);
    }
// для нахождения id покемона по url
    const pokemoId = (url) => {
        let n = url.slice(34).slice(0, -1);
        return n
    }

    if (fetching) {
        return (<Loading/>)
    } else
        return (
            // <>{console.log(data.pokemon[0].pokemon.url)}</>

            <div className={"all-card"}>
                <div className={"card-mini-block"}>
                    {data.pokemon.map((data, index) =>
                        <Link to={`/Pokemon/${pokemoId(data.pokemon.url)}`} className={"card-mini"} key={index}>

                            <div className={"card-mini-title"}>
                                {data.pokemon.name}
                            </div>
                            <img
                                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(imageUrl(data.pokemon.url).slice(0, -1))}.png`}
                                alt=""/>
                        </Link>
                    )}
                </div>
            </div>
        )
}

export default AllTypes;