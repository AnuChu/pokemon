import React, {useEffect, useState} from 'react';
import '../../css/main.css';

const Input = (props) => {
    const [query, setQuery] = useState("")

    useEffect(() => {
        props.setFilteredData(props.data.filter((pokemon) => pokemon.name.startsWith(query)))
    }, [query])

    const SearchPokemon = () => {
    }

    return (
        <form className={"input"} onSubmit={SearchPokemon}>
            <input
                name="search"
                placeholder={"Enter the name or number of the pokemon"}
                value={query}
                onChange={e => setQuery(e.target.value)}/>
        </form>
    )
}
export default Input;