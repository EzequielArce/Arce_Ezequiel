async function obtenerUsuario(url,indice){
    try{
        const respuesta = await fetch(url + '/' + indice)
        const usuarios = await respuesta.json()
        return usuarios
    }catch(e){
        console.log(e)
    }
}

async function obtenerPosts(url,usuarioId){
    try{
        const respuesta = await fetch(url + usuarioId)
        const publicaciones = await respuesta.json()
        return publicaciones
    }catch(e){
        console.log(e)
    }
}

const urlUsuarios = 'https://jsonplaceholder.typicode.com/users'
const urlPost = 'https://jsonplaceholder.typicode.com/posts?userId='

async function EjecucionSecuencial(){
    console.log("--- Ejecución Secuencial ---")
    for (let i = 1; i <= 3; i++) {
        const usuario = await obtenerUsuario(urlUsuarios, i)
        const publicaciones = await obtenerPosts(urlPost, usuario.id)
        console.log(usuario.name + ' tiene ' + publicaciones.length + ' publicaciones')
    }
}

async function EjecucionParalela(){
    console.log("--- Ejecucion Paralela ---")

    const usuariosPromises = [1, 2, 3].map(id => obtenerUsuario(urlUsuarios, id))
    const usuarios = await Promise.all(usuariosPromises)

    const publicacionesPromises = usuarios.map(usuario => obtenerPosts(urlPost, usuario.id))
    const publicacionesPorUsuario = await Promise.all(publicacionesPromises)

    usuarios.forEach((usuario, index) => {
        const publicaciones = publicacionesPorUsuario[index]
        console.log(usuario.name + ' tiene ' + publicaciones.length + ' publicaciones')
    });
}

async function main() {
    await EjecucionSecuencial()
    await EjecucionParalela()
}

main()
