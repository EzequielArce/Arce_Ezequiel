"use client";

import { useState , useEffect} from "react";
import axios from "axios";

async function getPokemonDetails(url : string) {
    try {
        let respuesta = await axios.get(url);
        return respuesta.data;
    } catch(e) {
        console.error(e);
        return null;
    }
}

type PokemonItemProps = {
  name: string;
  url: string;
};

type PokemonDetails = {
  id?: number;
  image?: string;
  height?: number;
  weight?: number;
  types?: string[];
};

export default function PokemonItem({name, url} : PokemonItemProps) {
  const [details, setDetails] = useState<PokemonDetails>({});
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchDetails = async () => {
        const data = await getPokemonDetails(url);
        if (data) {
          setDetails({
            id: data.id,
            image: data.sprites.front_default,
            height: data.height,
            weight: data.weight,
            types: data.types.map((t: any) => t.type.name),
          });
        }
    };
    fetchDetails();
  }, [url]);

  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{
        display: "block",
        margin: "8px",
        padding: "10px",
        border: "1px solid gray",
        borderRadius: "6px",
        backgroundColor: "#f8f8f8",
        cursor: "pointer",
        width: "250px",
        textAlign: "left"
      }}
    >
      <strong>{name}</strong> #{details.id}
      <br />
      {details.image && <img src={details.image} alt={name} width={50} />} 
      <br />
      Contador: {count} clicks
      <br />
      Altura: {details.height} | Peso: {details.weight}
      <br />
      Tipos: {details.types?.join(", ")}
    </button>
  );
}