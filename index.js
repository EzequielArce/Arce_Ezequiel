// https://pokeapi.co/api/v2/pokemon/lickitung


async function ostia() {
    try {
        let jodertio = await axios.get("https://pokeapi.co/api/v2/pokemon/lickitung");
        console.log(await jodertio.json());
    } catch(e) {
        console.error(e)
    }
}

ostia();
console.log("Hola")