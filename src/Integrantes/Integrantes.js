import './integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import {useEffect} from 'react';


export function Integrantes(){

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/GWEN-STEFANI.png?alt=media&token=a0de6d8b-1b1d-4091-aebe-6ff8e194fc36" alt="foto1" className="img-fluid w-100 animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft wow'>
                    <h3 className='text-center'>Gwen Stefani,</h3>
                    <h3 className='text-center'>Vocalista</h3>
                </div>
                <div className='row mt-2'>
                    <div className='col-12' >
                     <div className="collapse" id="collapseExample">
                            <div className="card card-body text-center">
                            Nacio en Fullerton, California; 3 de octubre de 1969. Es una cantante, compositora, diseñadora de moda y actriz estadounidense. Es cofundadora, vocalista y compositora principal de la banda No Doubt, cuyos sencillos incluyen «Just a Girl», «Spiderwebs» y «Don't Speak», de su álbum de estudio de 1995 Tragic Kingdom, así como «Hey Baby» y «It's My Life» de álbumes posteriores.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center animate__animated animate__backInRight wow '>
                   <h3 className='text-center'>tom Dumont,</h3>
                    <h3 className='text-center'>Guitarrista</h3>
                </div>
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/TomDumont.jpg?alt=media&token=077db479-7fed-4236-8bd0-6135449d2c78" alt="foto1" className="img-fluid w-100 animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='row mt-2'>
                    <div className='col-12' >
                     <div className="collapse" id="collapseExample">
                            <div className="card card-body text-center">
                            Tomás Martín Dumont (11 de enero de 1968, Los Ángeles, California) es un guitarrista y productor estadounidense, que más conocido ser el guitarrista de la banda de rock No Doubt.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/Tony-Kanal-.jpg?alt=media&token=41e4e313-0e14-491d-8656-9f4d80215645" alt="foto1" className="img-fluid w-100 animate__animated  animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft'>
                    <h2 className='text-center'> Tony Kanal </h2>
                    <h3 className='text-center'>Bajista</h3>
                    
                </div>
                <div className='row mt-2'>
                    <div className='col-12' >
                     <div className="collapse" id="collapseExample">
                            <div className="card card-body text-center">
                            Ashwin Tony Kanal (Londres, 27 de agosto de 1970) es un músico y un productor inglés. Es el bajista de la banda de ska y soft rock No Doubt y produjo el disco Together as One del cantante de reggae Elan Atias..
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center aling-text-end animate__animated animate__backInRight wow'>
                    <h2 className='text-center'>Adrian Young.</h2>
                    <h3 className='text-center'>Baterista</h3>
                    
                </div>
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosantojoslpg.appspot.com/o/Adrian-Young-.jpg?alt=media&token=167e382b-9cfd-49c3-9398-4302e96b72de" alt="foto1" className="img-fluid w-100 animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample" />
                </div>
                <div className='row mt-2'>
                    <div className='col-12' >
                     <div className="collapse" id="collapseExample">
                            <div className="card card-body text-center">
                            Samuel Adrian Young (nacido el 26 de agosto de 1969) es el baterista de la banda de rock No Doubt.
                            Young es muy buscado como el baterista de estudio. Ha grabado realizadas con bandas como Bow Wow Wow, Scott Weiland, Dilana, Maroon 5, Unwritten Law, The Vandals, Bing Ji Ling, entre otras tanto de rock como ska.
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}