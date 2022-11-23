export async function servicioCanciones()
{
    const URI="https://api.spotify.com/v1/artists/1IQ2e1buppatiN1bxUVkrk/top-tracks?market=ES"
    const TOKEN="Bearer BQAHuvhy57OHGM0RD8tzD0ix4KLG1HY2ZA2MfcILKNxFLNsDAw2kMOuIaArPelWkpL7oxOM7sah529W8r-_Y7MxygFkpfh0YBwKSCXXG-e7ZTc6FN4KjLCe1wX08Ce9mWThhobe2BuOjSNLoD0N5JbazlCIZBbF6coR6Adee8DwQlT4JbAPq8kxNWh5DrbIg_hk"
    const PETICION=
    {
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta = await fetch(URI,PETICION)
    let canciones = await respuesta.json()

    return canciones
}