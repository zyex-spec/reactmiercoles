export async function servicioCanciones()
{
    const URI="https://api.spotify.com/v1/artists/1IQ2e1buppatiN1bxUVkrk/top-tracks?market=ES"
    const TOKEN="Bearer BQAZ_-GIyzCxHaO80ZCeA8gpRAjSkD0Dt-7QLl-D6VWICD1pMF6MZFc7hRkXpiwfas_EDNuO_uPbBESjgbYzadeRvEfkYsYUCvmQnneSDvTqgg1DsFWjyYNiHxK3NPL_1MJ435xy01U-QbQrg6puqgxeWK-rT7foFt7FoIjQqX2GudQqQ9UMp-XpjzwF0uPVDEc"
    const PETICION=
    {
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta = await fetch(URI,PETICION)
    let canciones = await respuesta.json()

    return canciones
}