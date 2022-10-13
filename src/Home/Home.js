import './Home.css'
import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'
export function Home(){

    let descripcionBanda="ue una banda de rock estadounidense de Anaheim, California, formada en 1986. Durante la mayor parte de su carrera, la banda estuvo formada por la vocalista Gwen Stefani, el guitarrista Tom Dumont, el bajista Tony Kanal y el baterista Adrian Young. Desde mediados de la década de 1990, fueron apoyados por el trombonista y teclista Gabrial McNair y el trompetista y teclista Stephen Bradley en presentaciones en vivo.Aunque su álbum debut homónimo de 1992 no tuvo impacto, su seguimiento inspirado en el ska punk, The Beacon Street Collection, vendió más de 100 000 copias en 1995, más del triple que su predecesor. El álbum de la banda, certificado como diamante, Tragic Kingdom (1995) se benefició del resurgimiento del ska de tercera ola en la década de 1990, y «Don't Speak», el tercer sencillo del álbum, que estableció un récord cuando pasó 16 semanas en el número uno en la lista Billboard Hot 100 Airplay. «Just a Girl», coescrita por Stefani, fue descrita como «la versión más popular del CD"

    return(
        <>
            <div className="banner">
                
            </div>
            <div>
               <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">NO DOUBT</h1>
                            <p className='text-center'>{descripcionBanda}</p>
                        </div>
                    </div>
               </div>
            </div>
            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
}