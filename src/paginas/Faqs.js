import React from 'react'

import TitleFaqs from  '../assets/img/titulo_FAQS.png'

export const Faqs = () => {
    return (
        <>
        <div className='text-center'>
            <img src={TitleFaqs} alt='titulo de la tabla' className='img-fluid p-2'/>
        </div>
        <div className="container-fluid text-light w-75">
            <h3>Objetivo:</h3>
            <p> 
            Cada jugador intentará llegar lo más lejos que pueda en cola clasificatoria de solo Q,
            el reto durará toda la temporada 12, la cuál dara inicio el <strong>7 de enero del 2022.</strong><br/>
            Los 3 jugadores que logren quedar en la posición más alta de entre todos los participantes, recibirán una recompensa.
            </p>
            <h4>Recompensa :</h4>
            <ul>
            <li>Primer lugar 5100 RP</li>
            <li>Segundo lugar 3900 RP</li>
            <li>Tercer lugar 2100 RP</li>
            </ul>
            <h4>Requisitos:</h4>
            <p>
            Para hacer el torneo más complicado y entretenido, se decidío poner tres retos, de los cuales cada jugador selecciono uno para
            poder entrar al torneo, los retos son los siguientes:
            </p>
            <ol>
            <li><strong>Jugar con su campeón MAIN</strong></li>
                <ul>
                <li>Solo se usará el campeon MAIN en todas las partidas del torneo.</li>
                <li>El jugador puede selccionar un segundo campeon libre, por si su MAIN no esta disponible.</li>
                <li>Se jugara el campeón MAIN sin importar la posición.</li>
                </ul>
            <li> <strong> Jugar con sus dos peores roles.</strong></li>
            <ul>
                <li>El staff analizará en cuál de los 5 roles tiene peor win-rate.</li>
                <li>Podrán jugar cualquier campeon disponible para ese rol.</li>
            </ul>
            <li><strong>Jugar autofill</strong></li>
            <ul>
                <li>El staff le otorgará 2 campeones por rol para que juegue </li>
                <li>EL jugador podrá banear banear un campeón por rol para que el staff no lo use.</li>
                <li>El jugador ésta obligado a siempre selccionar <strong>Fill</strong> seimpre que inicie una pártida.</li>
                <li>El jugador ésta obligado a jugar con los campeones que le staff le otorgue</li>
            </ul>
            </ol> 
            <h4>Reglas:</h4>
            <p>
            El incumplir cualquiera de las siguientes reglas es motivo de descalificación inmediata: 
            </p>
            <ul>
            <li>Si no respetan la condición que escogieron serán descalificados</li>
            <li><strong>Queda prohibido</strong> jugar duo a partir de oro 3</li>
            <li>Contratar servicios de ELOBOOST</li>
            </ul>
        </div>  
        </>
    )
}
