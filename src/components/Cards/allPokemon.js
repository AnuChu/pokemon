import React, {useEffect, useState} from 'react';
import '../../css/main.css';
import Loading from "../loading";
import MiniCards from "./miniCards";

const AllPokemon = (props) => {
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=1118`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                props.setData(data.results)
                setFetching(false)
            })
            .catch(error => alert(error))
    }, []);

    if (fetching) {
        return (<Loading/>)
    } else
        return <MiniCards data={props.filteredData}/>
}

export default AllPokemon;