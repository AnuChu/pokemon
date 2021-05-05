import React, {useEffect, useState} from 'react';
import '../../css/main.css';
import Loading from "../loading";
import MiniCards from "./miniCards";

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
                setData(data.pokemon)
                setFetching(false)
            })
            .catch(error => alert(error))
    }, [props.match.params.id]);


    if (fetching) {
        return (<Loading/>)
    } else
        return <MiniCards data={data.map((pokemon) => pokemon.pokemon)}/>
}

export default AllTypes;