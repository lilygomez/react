export function Carrusel(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/imagen%201.jpeg?alt=media&token=743ac78f-d57c-4e5f-84c9-d464475797a4" class="d-block w-100" height="900" className="w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/1%20foto.jpg?alt=media&token=d3f43f36-d7f1-4a4e-aef8-f98c6a23d29b" class="d-block w-100" height="900" className="w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/2%20foto.jpg?alt=media&token=76584993-e38b-43f1-bc6a-9464d9956742" class="d-block w-100" height="900" className="w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )
}