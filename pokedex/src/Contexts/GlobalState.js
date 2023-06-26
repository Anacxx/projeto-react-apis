import { GlobalContext } from "./GlobalContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { url } from "../constants/url";
export const GlobalState = (props) => {
    const [pokelist, setPokelist] = useState([])
    const [pokedex,setPokedex] = useState([])
    useEffect(() => {
        getPokemons()
    }, [])
    const getPokemons = async () =>{
        try{
            const res = await axios.get(url)
            setPokelist(res.data.results)
        }catch(err){
            console.log(err)
        }
    }
    const addPokedex = (pokemonToAdd) => {
        const jaNapokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name)
        if (!jaNapokedex) {
            const newPokedex = [...pokedex,pokemonToAdd]
            setPokedex(newPokedex)
        }
    }
    const removerPokedex = (pokemonToRemove) => {
        const newPodex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name)
        setPokedex(newPodex)
    }

    const context = {
        pokelist,
        pokedex,
        addPokedex,
        removerPokedex,
    }
    return(
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}