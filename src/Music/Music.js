import { useState, useEffect } from "react"
import { servicioCanciones } from "../services/servicioCanciones.js"
//Necesito usar el hook useState
//Para almacenar la rspuesta del servicio de forma global

export function Music(){

    //Creando mi primer usesate
    const[canciones,setCanciones]=useState(null)
    const[estamosCargando,setEstamosCargando]=useState(true)

    //Usando mi primer USEEFFECT
    useEffect(function(){
        servicioCanciones()
        .then(function(respuesta){
            setCanciones(respuesta)
            setEstamosCargando(false)
        })
    },[])

    if(estamosCargando)
    {
        return(
            <>
            <h1>Estamos cargando...</h1>
            </>
        )
    }
    else
    {
        return(
        <>
        <h1>Estan listas las canciones...</h1>   
        <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">

            {
                
                canciones.tracks.map(function(cancion){
                    return(
                        <>
                            <div className="col mt-3 bg-dark p-5">
                                <div className="card h-100">
                                    <img src={cancion.album.images[1].url} alt="foto" className="img-fluid w-100 h-100"></img>
                                    <h4 className="text-center fw-bold">{cancion.name}</h4>
                                    <h5 className="text-center fw-bold">#: {cancion.track_number}</h5>
                                    <h6 className="text-center fw-bold">Duracion: {cancion.duration_ms}</h6>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
        </>
        )
    }
}