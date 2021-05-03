import React, {useEffect, useState} from 'react';
import Loading from "../loading";
import '../../css/main.css';
import {Link} from "react-router-dom";

const Types = (props) => {

    const [types, setTypes] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => {
                return response.json();
            })
            .then(type => {
                setTypes(type)
                setFetching(false)
            })
            .catch(error => alert(error))
    }, []);

    if (fetching) {
        return (<Loading/>)
    } else
        return (
            <div className={"type-wrapper"}>
                <div className={"types-block"}>
                    {types.results.filter(name => name.name !== 'unknown' && name.name !== 'shadow').map((type, index) =>
                        <Link to={`/Types/${index+1}`} key={index}>
                            <button className={"type"}>
                                <img src={`/img/types/${type.name}.png`} alt=""/>
                                <div className={"types-title"}>{type.name}</div>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        )
}
export default Types;