"use client";

import { useEffect, useState } from "react";
import PokemonItem from './PokemonItem';
import axios from "axios";

async function getFirstPokemons(cantPokemons : number) {
    try {
        let respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=" + cantPokemons);
        return respuesta.data['results'];
    } catch(e) {
        console.error(e);
        return [];
    }
}

type Pokemon = {
  name: string;
  url: string;
};

export default function PokemonList() {

    const [pokemons,setPokemons] = useState<Pokemon[]>([])
    
    // Montar
    useEffect(() => {

        const fetchData = async () => {
        const data = await getFirstPokemons(20);
        setPokemons(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {pokemons.map((pokemon) => (
                <li key={pokemon.name}>
                    <PokemonItem name={pokemon.name} url={pokemon.url}/>
                </li>
                ))}
            </ul>
        </div>
    );
}
