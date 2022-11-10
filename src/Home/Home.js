import './Home.css'
import { Footer } from '../Footer/Footer.js'
export function Home(){

    return(
        <>
            <img src='https://firebasestorage.googleapis.com/v0/b/cinebl.appspot.com/o/Slayer.jpg?alt=media&token=ea914364-aa07-413d-a84f-8d4aa97822ea' alt='banner' className="w-100 img-fluid"/>

            <section className='bg-dark'>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 text-center text-white">
                            <h1>Slayer</h1>
                            <p>Slayer fue una banda estadounidense de thrash metal proveniente de Huntington Park, California. Fundada en 1981 por los guitarristas Kerry King y Jeff Hanneman, el baterista de origen cubano Dave Lombardo y el bajista y vocalista de origen chileno Tom Araya. El agresivo y rápido estilo de Slayer les haría parte de «los cuatro grandes del thrash metal», junto con Metallica, Megadeth y Anthrax.</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/cinebl.appspot.com/o/Slayer%202.jpeg?alt=media&token=6a8ab272-b83a-4e6c-a42c-5fe94ac3c0ae" className="img-fluid w-100" alt=""/>
                        </div>
                        <div className="col-12 col-md-4 align-self-center text-white">
                            <p>
                            Slayer se formó a finales de 1981, cuando Kerry King conoció a Jeff Hanneman mientras estaban haciendo pruebas para entrar en una banda de heavy metal.4​ Ambos contrataron al vocalista y bajista de origen chileno Tom Araya y al baterista cubano Dave Lombardo, a quien conocieron mientras trabajaba como repartidor de pizzas.5​ La banda comenzó a interpretar canciones de bandas británicas de heavy metal como Iron Maiden, Black Sabbath, Judas Priest y hasta de Venom. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </>
    )
}