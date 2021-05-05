import React from "react";
import {Link} from "react-router-dom";

const MiniCards = (data) => {

    /** для нахождения картинки, т.к на оф.сайте они 001, 010, 100 и т.д ( а не просто 1, 2, 3)
     *
     * @param url
     * @returns {string|Blob}
     */
    const imageUrl = (url) => {
        if ((url.slice(34).slice(0, -1)) < 10) {
            return "00" + url.slice(34)
        } else if ((url.slice(34).slice(0, -1)) < 100) {
            return "0" + url.slice(34)
        } else return (url.slice(34).slice(0, 4))
    }

    /** для нахождения id покемона по url
     *
     * @param url
     * @returns {Blob}
     */
    const pokemoId = (url) => {
        return url.slice(34).slice(0, -1);
    }

    return (
        <div className={"all-card"}>
            <div className={"card-mini-block"}>
                {data.data.map((data, index) =>
                    <Link to={`/Pokemon/${pokemoId(data.url)}`} className={"card-mini"} key={index}>
                        <div className={"card-mini-title"}>
                            {data.name}
                        </div>
                        <img
                            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(imageUrl(data.url).slice(0, -1))}.png`}
                            alt=""/>
                    </Link>
                )}
            </div>
        </div>
    )
}
export default MiniCards;