export async function serviciosTOKEN(){

//uri
const URI="https://accounts.spotify.com/api/token"

//datos
const DATO1="grant_type=client_credentials"
const DATO2="client_secret=0022b61f4f734815b136959d4e5c82eb"
const DATO3="client_id=473335b1eb4c4931b84b3c698979c9a9"

//peticion
const PETCION={
    method:"POST",
    headers:{"content-type":"application/x-www-form-urlencoded"},
    body:DATO1+"&"+DATO2+"&"+DATO3
}


//fetch
let respuesta=await fetch(URI,PETCION)
let datos=await respuesta.json()
datos=datos.token_type+' '+datos.access_token;
return datos



}