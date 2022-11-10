export function Integrantes(){

    let Integrantes=[
        {
            nombre:"Tom Araya",
            instrumento:"Vocalista",
            edad:"61",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinebl.appspot.com/o/Tom.jpg?alt=media&token=5fdead2c-968c-4851-a8c0-dfc1c9db5f5e"
        },
        {
            nombre:"Kerry King",
            instrumento:"Guitarra Solista",
            edad:"58",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinebl.appspot.com/o/Kerry.jpg?alt=media&token=58df91cd-9864-4309-a481-5e32edad2593"
        },
        {
            nombre:"Jeff Hanneman",
            instrumento:"Guitarra Ritmica",
            edad:"49",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinebl.appspot.com/o/Jeff.jpg?alt=media&token=000a6d3f-0622-482b-a8a5-74f42a373f96"
        },
        {
            nombre:"Dave Lombardo",
            instrumento:"Bateria",
            edad:"57",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/cinebl.appspot.com/o/Dave.jpg?alt=media&token=7015b987-4f24-4bf4-ba4f-9d35bd324ca8"
        }
    ]

    return(
        <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">
            {
                Integrantes.map(function(integrante){
                    return(
                        <>
                            <div className="col mt-3 bg-dark p-5">
                                <div className="card h-100">
                                    <img src={integrante.fotografia} alt="foto" className="img-fluid w-100 h-100"></img>
                                    <h4 className="text-center fw-bold">{integrante.nombre}</h4>
                                    <h5 className="text-center fw-bold">Edad: {integrante.edad}</h5>
                                    <h6 className="text-center fw-bold">Rol: {integrante.instrumento}</h6>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}