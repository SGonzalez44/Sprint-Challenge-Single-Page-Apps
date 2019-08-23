import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        axios.get("https://rickandmortyapi.com/api/episode/")
        .then( res => {
        console.log(res);
        setEpisodes(res.data.results);
        })
        .catch( err => console.log("Error:", err));
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);

    return (
        <section className="character-list grid-view">
{episodes.map( epInfo => <EpisodeCard key={epInfo.id} id={epInfo.id} name={epInfo.name} episode={epInfo.episode} airDate={epInfo["air_date"]}/>)}
        </section>
    );
}