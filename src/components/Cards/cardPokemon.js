import React, {useEffect, useState} from 'react';
import '../../css/main.css';
import Loading from "../loading";

const CardPokemon = (props) => {

    const [data, setData] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data)
                setFetching(false)
            })
            .catch(error => alert(error))
    }, []);


    const imageCount = (id) => {
        if (id < 10) {
            return "00" + id
        } else if (id < 100) {
            return "0" + id
        } else return id
    }
    if (fetching) {
        return (<Loading/>)
    } else
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
                        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageCount(data.id)}.png`}
                             alt=""/>
                    </div>

                    <div className={"card-pokemon-block-2"}>
                        <div className={"card-pokemon-title"}> &nbsp;About&nbsp; </div>
                        <p className={"card-pokemon-subtitle"}>soon...</p>
                        <div className={"card-pokemon-title"}> &nbsp;Type&nbsp; </div>
                        <div className={"card-pokemon-subtitle types"}>
                            {data.types.map((types, index) =>
                                <img src={`/img/types/${types.type.name}.png`} alt={types.type.name} key={index}/>
                            )}
                        </div>
                        <div className={"card-pokemon-title"}> &nbsp;Characteristic&nbsp;</div>
                        <p className={"card-pokemon-subtitle"}>
                            Height: {data.height}<br/>
                            Weight: {data.weight}<br/>
                        </p>
                        <div className={"card-pokemon-title"}> &nbsp;Official&nbsp;page&nbsp; </div>
                        <p className={"card-pokemon-subtitle"}><a href={`https://www.pokemon.com/ru/pokedex/${data.name}}`}>Open on pokedex</a></p>
                    </div>

                </div>
            </div>
        )
}
export default CardPokemon;