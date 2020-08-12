import React, {useEffect, useState} from 'react';
import Loading from "./loading";
import '../css/main.css';

const Types = () => {

    const [types, setTypes] = useState([])
    const [fetching, setFetching] = useState(true)

        useEffect(() => {
            fetch('https://pokeapi.co/api/v2/type')
                .then(response => {
                    return response.json();
                })
                .then(type => {
                    console.log(type);
                    setTypes(type)
                    setFetching(false)
                })
                .catch(error => alert(error))
        }, []);

// const filtr =()=>{
//     {types.results.filter(type => type.name.includes('Unknown' || 'Shadow')).map(fileredName)}
//     {types.results.filter(name=>!name.includes('Unknown' || 'Shadow')).map(type=>
//     {types.results.map(type =>
// }

if (fetching) {return(<Loading/>)}
else
    return(
        <div className={"types-block"}>
            {types.results.filter(name => name!== 'Unknown' && name!=='Shadow').map(type=>
                <button className={"type"}>
                    <img src={`/img/types/${type.name}.png`} alt=""/>
                    <div className={"types-title"}>{type.name}</div>
                </button>
            ) }
        </div>
    )
}
export default Types;