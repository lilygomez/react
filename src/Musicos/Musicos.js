import { Footer } from "../Footer/Footer.js"

export function Musicos(){
// un arreglo de objetos es formado comun al consumir un api
    let Musicos=[
        {
            nombre:"Gwen Stefani",
            rol:"Vocalista",
            url:"https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/gwen.jpg?alt=media&token=e7a4019f-db1b-4cf5-b47a-f3bbe9163305"
        },
        {
            nombre:"Tom Dumont",
            rol:"Guitarrista",
            url:"https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/Tom%20dumont.jpg?alt=media&token=3aa4b095-1891-4561-b9ec-c360f9350e85"
        },
        {
            nombre:"Tony Kanal ",
            rol:"Bajista",
            url:"https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/tony%20kanal.jpg?alt=media&token=5fefcf42-0edd-4c28-957d-c70140ceee8a"
        },
        {
            nombre:" Adrian Young",
            rol:"Baterista",
            url:"https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/adrian%20young.jpg?alt=media&token=32da801c-f151-4db5-87b7-222e213c6232"
        },
        
    ]

        let conciertoMemorables=[
            {
                fecha:"1992",
                pais:"EEUU",
                descripcion:"En 1991 recibieron la oferta de Interscope Records para grabar su primer disco homónimo el cual fue lanzado en 1992. El primer sencillo y el único de este álbum fue Trapped in a Box",
                foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/artworks-yUw0pJPNCMKF-0-t500x500.jpg?alt=media&token=28636498-5224-42c6-a1a5-63244d331d37",

            },

            {
                fecha:"1993-1994",
                pais:"EEUU",
                descripcion:"En 1993 Interscope observó el hecho y decidió volver a firmar el contrato con el grupo. Tras esto, durante 2 años y medio, se pusieron en marcha a preparar el siguiente disco: Tragic Kingdom el cual se grabó en 11 estudios diferentes. Antes de terminar este álbum, en 1994",
                foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/tragic%20kingdow.jpg?alt=media&token=c5300ed8-3152-4d6c-949f-087e245663f5",

            },

            {
                fecha:"2000",
                pais:"EEUU",
                descripcion:"Después de tres años sin movimientos, el 11 de abril de 2000 vio la luz Return of Saturn, el cuarto álbum del grupo. Este apareció en segundo puesto tras su lanzamiento en Billboard 200",
                foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/return.jpg?alt=media&token=0430b011-4fe6-4ea6-8e62-1135edc633a4",

            },

            {
                fecha:"2001",
                pais:"EEUU",
                descripcion:"Después de Return of Saturn, llegó Rock Steady, que fue lanzado al año siguiente, el 11 de diciembre de 2001. Un álbum con un notable cambio de sonido al que No Doubt nos tenía acostumbrados; mientras que en este álbum el uso de sintetizadores fue notable, las guitarras estridentes disminuyeron, haciéndolo un disco más Pop y pegajoso que los anteriores. El disco incluyó 13 canciones",
                foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/Rock_Steady.png?alt=media&token=f10f9d41-f125-4f0d-bd24-d4e8c6040c1d",

            },

            {
                fecha:"2003-2007",
                pais:"EEUU",
                descripcion:"DEn 2003, No Doubt, lanza The Singles 1992-2003, un recopilatorio de todos los sencillos lanzados desde 1992. Este recopilatorio incluye la versión del grupo de la canción de Talk Talk: Its My Life, la cual tuvo éxito considerable. Hasta agosto de 2012, The Singles 1992-2003 vendió 2 500 000 copias en Estados Unidos, donde fue certificado doble disco de platino por la RIAA",
                foto:"https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/the%20simples%201992%202003.jpg?alt=media&token=2392c02e-1644-4155-8b36-29e25da6ff66",

            },
        ]

    //mapeando un arreglo para hacer render 
    return(
        <>
        <h1 className= "justify-content-center mt-5 text-center text-danger">Integrantes de la Banda</h1>
        <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center mt-5">
          {
          Musicos.map(function(musico){
            return(
              <>
              <div className="col mt-3 justify-content-center">
                <div className="card h-100">
                  <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"/>
                  <h3 className="text-center">{musico.nombre}</h3>
                  <h4 className="text-center">{musico.rol}</h4>
                </div>
              </div>
              </>
            )
          })
          }
          
        </div>
        <h1 className= "justify-content-center mt-5 text-center text-danger">Mejores Albumes</h1>
        <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center mt-5">
          {
            conciertoMemorables.map(function(conciertosMemorable1){
              return(
                <>
                <div className="col mt-3 justify-content-center">
                <div className="card h-100">
                  <img src={conciertosMemorable1.foto} className="img-fluid w-100 h-80" alt="foto"/>
                  <h3 className="text-center">{conciertosMemorable1.fecha}</h3>
                  <h4 className="text-center">{conciertosMemorable1.pais}</h4>
                  <h4 className="text-center">{conciertosMemorable1.descripcion}</h4>
                </div>
              </div>            
                </>
              )
            })
          }
        </div>
    
        <Footer></Footer>
        </>
    )



}