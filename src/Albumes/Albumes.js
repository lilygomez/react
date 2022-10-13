import { servicioSpoty } from "../services/servicioSpoty.js";
import { serviciosTOKEN } from "../services/serviciosToken.js";
import { useState, useEffect } from "react";

export function Albumes() {
  //declarando mi primer useState
  const [canciones, setCanciones] = useState(null);
  //useState para la carga de datos

  const [carga, setCarga] = useState(true);

  //usando el useEffect
  useEffect(function () {
      servicioSpoty().then(function (respuesta) {
      setCanciones(respuesta.tracks)
      setCarga(false)
    });

    console.log(canciones);
  }, []);

  if(carga==true){

    return(
        <>
        <h1>estoy cargando...</h1>
        </>
    )

  }else{
    return (
        <>
          <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center mt-5">
          {
          canciones.map(function(cancion){
            return(
              <>
              <div className="col-12 mt-3 justify-content-center">
                <div className="card h-100">
                  <audio src={cancion.preview_url} controls/>
                  <h3 className="text-center">{cancion.name}</h3>
                  <img src= {cancion.album.images[0].url}/>
                </div>
              </div>
              </>
            )
          })
          }
            
        </div>
        </>
         );

  }
  

  
 
}
