import React, { useEffect, useState } from 'react'


export const Table = () => {

    const [wins, setWins]= useState();
    const [loss, setLosss]= useState();
    const [elo, setElo]= useState();
    const [lp, setLp]= useState();

    /*const [wins1, setWins1]= useState();
    const [loss1, setLosss1]= useState();
    const [elo1, setElo1]= useState();
    const [lp1, setLp1]= useState();*/

    useEffect(() => {
        Apiriot();
    }, [])

    const Apiriot =  async() => {
        /*dante621*/   
        const url=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/YCwtsr7OaFXDG3yiEMoLtoQjdu4sMkq4hxstFIYOfriOQQ?api_key=RGAPI-a8c30be1-d888-42ba-8ade-0724f4cdd5c9`;
        const resp = await fetch (url);
        const data = await resp.json(); 
        const wins = data[0].wins;
        const loss = data[0].losses;
        const elo = data[0].tier+' '+data[0].rank;
        const lp = data[0].leaguePoints
        console.log(data);   
        
        setWins(wins);
        setLosss(loss);
        setElo(elo);
        setLp(lp);

        /*Kinho94  
        const url1=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/vQJ9clrpmLPNNyrMB4RInCPvoLjreiz2td1nGe0qSEKp?api_key=RGAPI-a8c30be1-d888-42ba-8ade-0724f4cdd5c9`;
        const resp1 = await fetch (url1);
        const data1 = await resp1.json(); 
        const wins1 = data1[0].wins;
        const loss1 = data1[0].losses;
        const elo1 = data1[0].tier+' '+data1[0].rank;
        const lp1 = data1[0].leaguePoints
        console.log(data1);   
        
        setWins(wins1);
        setLosss(loss1);
        setElo(elo1);
        setLp(lp1);
        */ 

    }

    return (
       <>
       <div className="table-responsive mx-auto p-1">
            <table className="table table-striped table-hover table-dark text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Victorias</th>
                    <th scope="col">Derrotas</th>
                    <th scope="col">ELO</th>
                    <th scope="col">LP</th>
                    <th scope="col">Desafio</th>
                    <th scope="col">Historial</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Khino94</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Luisinked</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Dante621</td>
                        <td>{wins}</td>
                        <td>{loss}</td>
                        <td>{elo}</td>
                        <td>{lp}</td>
                        <td>Sett/Garen</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'> op.gg </a></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Humber7o</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Only main</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Señor Quesito</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Only main</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>ThothMon</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Only main</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Fiesta Duck</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>SNG Manolos</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>SNG Ruben</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>SNG GBirou667</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>SNG Cross</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td>op.gg</td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>PepsiBoy</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Autofill</td>
                        <td>op.gg</td>
                    </tr>
                </tbody>
            </table>
        </div>
       </>
    )
}
