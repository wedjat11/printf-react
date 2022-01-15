import React from 'react'
import title from '../assets/img/titulo_oficial.png'

import PoroJinx  from '../assets/img/poro_jinx.png'
import PoroJinx2  from '../assets/img/poro_jinx2.png'
import Season from '../assets/img/lol_season.jpg'
import Season2 from '../assets/img/lol_season2.jpg'
import './Home.css'

export const Home = () => {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-white">
            <header className="mb-auto">
                <div className='text-center'>
                    <img src={title} alt='title:oficial'className='img-fluid' />
                </div>
            </header>
            {/*Slider*/}
            <main className=" mt-3 w-100 mx-auto text-center ">
            <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active ">
                    <img src={Season}className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={Season2} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/*End Slider*/}
                <div className='mt-4'>
                    <h3 className="">¡Bienvenidos a la nueva season!</h3>   
                    <p> Ha comenzado la <strong>temporada 2022 </strong>, una temporada apta para poder llegar a lo mas alto de la clasificación,<br/> 
                    espero se diviertan con este desafio, recuerden no flameen y no hagan trampa que diosito los ve.</p>     
                </div>
                <div className='d-inline-block'>
                    <img src={PoroJinx} alt='porito' className='m-4 porito img-fluid'/> 
                    <p className='d-inline-block'> Los Amo!</p>   
                    <img src={PoroJinx2} alt='porito' className='m-4 porito img-fluid'/>
                </div>                       
            </main>
        </div>  
    )
}
