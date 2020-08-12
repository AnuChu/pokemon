import React, {useEffect, useState} from 'react';
import '../css/main.css';
import Loading from "./loading";

const Pokemon = () => {

    const [data, setData] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/6`)
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


const imageCount = (id) =>{
    if (id < 10) {return "00"+id}
    else if (id < 100) {return "0"+id}
    else return id
}
    if (fetching) {return(<Loading />)}
    else
        return (
        <div className={"card-pokemon"}>
            <div className={"card-pokemon-block"}>

                <div className={"card-pokemon-block-1"}>
                    <div className={"card-pokemon-name"}>
                        <div className={"card-pokemon-name-number"}>
                        №{data.id}
                    </div>
                    <div className={"card-pokemon-name-name"}>
                        {data.name}
                    </div>
                    </div>
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageCount(data.id)}.png`} alt=""/>
                </div>

                <div className={"card-pokemon-block-2"}>
                    <div className={"card-pokemon-title"}> &nbsp;About&nbsp; </div>
                    <p className={"card-pokemon-subtitle"}>Bla-bla-bla Bla-bla-bla Bla-bla-bla Bla-bla-bla
                        Bla-bla-bla</p>
                    <div className={"card-pokemon-title"}> &nbsp;Type&nbsp; </div>
                    <p className={"card-pokemon-subtitle"}>
                        {data['types'][0]['type']['name']}<br/>
                        {data['types'][1]['type']['name']}<br/>
                    </p>
                    <div className={"card-pokemon-title"}> &nbsp;Characteristic&nbsp;</div>
                    <p className={"card-pokemon-subtitle"}>
                        Height: {data.height}<br/>
                        Weight: {data.weight}<br/>
                    </p>
                    <div className={"card-pokemon-title"}> &nbsp;Weaknesses&nbsp; </div>
                    <p className={"card-pokemon-subtitle"}>Bla-bla-bla</p>
                    <div className={"card-pokemon-title"}> &nbsp;Resistance&nbsp; </div>
                    <p className={"card-pokemon-subtitle"}>Bla-bla-bla</p>
                </div>

            </div>
        </div>
    )
}
export default Pokemon;