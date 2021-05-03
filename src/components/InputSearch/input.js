import React, {useState} from 'react';
import '../../css/main.css';

const Input = () => {
    const [query, setQuery] = useState("")
    return (
        <form className={"input"}>
            <input
                name="serch"
                placeholder={"Enter the name or number of the pokemon"}
                onChange={e => setQuery(e.target.value)}/>

        </form>
    )
}
export default Input;