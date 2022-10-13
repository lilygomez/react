import { serviciosTOKEN } from "./serviciosToken.js"

export async function servicioSpoty(){

    const URI="https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx/top-tracks?market=US"

    const TOKEN= await serviciosTOKEN()
    console.log(TOKEN);

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta= await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
}