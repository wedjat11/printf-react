import React, { useEffect, useState } from 'react'
import oplogo from  '../assets/img/opgg.png';
import './Table.css';


const formato = function(number){
    return new Intl.NumberFormat('en-IN', {style: 'percent', minimumFractionDigits: 2}).format(number);
};

export const Table = () => {
    

    const [wins, setWins]= useState();
    const [loss, setLosss]= useState();
    const [elo, setElo]= useState();
    const [lp, setLp]= useState();
    const [wr, setwr]= useState();

    const [wins1, setWins1]= useState();
    const [loss1, setLosss1]= useState();
    const [elo1, setElo1]= useState();
    const [lp1, setLp1]= useState();
    const [wr1, setwr1]= useState();


    const [wins2, setWins2]= useState();
    const [loss2, setLosss2]= useState();
    const [elo2, setElo2]= useState();
    const [lp2, setLp2]= useState();
    const [wr2, setwr2]= useState();

    const [wins3, setWins3]= useState();
    const [loss3, setLosss3]= useState();
    const [elo3, setElo3]= useState();
    const [lp3, setLp3]= useState();
    const [wr3, setwr3]= useState();

    const [wins4, setWins4]= useState();
    const [loss4, setLosss4]= useState();
    const [elo4, setElo4]= useState();
    const [lp4, setLp4]= useState();
    const [wr4, setwr4]= useState();

    const [wins5, setWins5]= useState();
    const [loss5, setLosss5]= useState();
    const [elo5, setElo5]= useState();
    const [lp5, setLp5]= useState();
    const [wr5, setwr5]= useState();

    const [wins6, setWins6]= useState();
    const [loss6, setLosss6]= useState();
    const [elo6, setElo6]= useState();
    const [lp6, setLp6]= useState();
    const [wr6, setwr6]= useState();

    const [wins7, setWins7]= useState();
    const [loss7, setLosss7]= useState();
    const [elo7, setElo7]= useState();
    const [lp7, setLp7]= useState();
    const [wr7, setwr7]= useState();

    const [wins8, setWins8]= useState();
    const [loss8, setLosss8]= useState();
    const [elo8, setElo8]= useState();
    const [lp8, setLp8]= useState();
    const [wr8, setwr8]= useState();

    const [wins9, setWins9]= useState();
    const [loss9, setLosss9]= useState();
    const [elo9, setElo9]= useState();
    const [lp9, setLp9]= useState();
    const [wr9, setwr9]= useState();

    const [wins10, setWins10]= useState();
    const [loss10, setLosss10]= useState();
    const [elo10, setElo10]= useState();
    const [lp10, setLp10]= useState();
    const [wr10, setwr10]= useState();

    const [wins11, setWins11]= useState();
    const [loss11, setLosss11]= useState();
    const [elo11, setElo11]= useState();
    const [lp11, setLp11]= useState();
    const [wr11, setwr11]= useState();

    useEffect(() => {
        Apiriot();
    }, [])

    const Apiriot =  async() => {
        /*dante621*/   
        const url=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/YCwtsr7OaFXDG3yiEMoLtoQjdu4sMkq4hxstFIYOfriOQQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp = await fetch (url);
        const data = await resp.json(); 
        const wins = data[0].wins;
        const loss = data[0].losses;
        const elo = data[0].tier+' '+data[0].rank;
        const lp = data[0].leaguePoints;
        const wr = (wins)/(wins+loss);  
        
        setWins(wins);
        setLosss(loss);
        setElo(elo);
        setLp(lp);
        setwr(formato(wr));

        /*Luisinked*/ 
        const url1=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/9hO4yHF1aMzGz12-SY9RflPZImYkdHitfG-pEWd5SOTc?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp1 = await fetch (url1);
        const data1 = await resp1.json(); 
        const wins1 = data1[0].wins;
        const loss1 = data1[0].losses;
        const elo1 = data1[0].tier+' '+data1[0].rank;
        const lp1 = data1[0].leaguePoints
        const wr1 = (wins1)/(wins1+loss1);  
        console.log(data1);   
        
        setWins1(wins1);
        setLosss1(loss1);
        setElo1(elo1);
        setLp1(lp1);
        setwr1(formato(wr1));

        /*thothmon*/ 
        const url2=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp2 = await fetch (url2);
        const data2 = await resp2.json(); 
        const wins2 = data2[0].wins;
        const loss2 = data2[0].losses;
        const elo2 = data2[0].tier+' '+data2[0].rank;
        const lp2 = data2[0].leaguePoints
        const wr2 = (wins2)/(wins2+loss2);   
        
        setWins2(wins2);
        setLosss2(loss2);
        setElo2(elo2);
        setLp2(lp2);
        setwr2(formato(wr2));

         /*Humber7o*/ 
        const url3=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp3 = await fetch (url3);
        const data3 = await resp3.json(); 
        const wins3 = data3[0].wins;
        const loss3 = data3[0].losses;
        const elo3 = data3[0].tier+' '+data3[0].rank;
        const lp3 = data3[0].leaguePoints
        const wr3 = (wins3)/(wins3+loss3);   
         
        setWins3(wins3);
        setLosss3(loss3);
        setElo3(elo3);
        setLp3(lp3);
        setwr3(formato(wr3));

        /*Señor quesito*/ 
        const url4=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp4 = await fetch (url4);
        const data4 = await resp4.json(); 
        const wins4 = data4[0].wins;
        const loss4 = data4[0].losses;
        const elo4 = data4[0].tier+' '+data4[0].rank;
        const lp4 = data4[0].leaguePoints
        const wr4 = (wins4)/(wins4+loss4);   
        
        setWins4(wins4);
        setLosss4(loss4);
        setElo4(elo4);
        setLp4(lp4);
        setwr4(formato(wr4));

        /*Fiesta Duck*/ 
        const url5=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp5 = await fetch (url5);
        const data5 = await resp5.json(); 
        const wins5 = data5[0].wins;
        const loss5 = data5[0].losses;
        const elo5 = data5[0].tier+' '+data5[0].rank;
        const lp5 = data5[0].leaguePoints
        const wr5 = (wins5)/(wins5+loss5);   
         
        setWins5(wins5);
        setLosss5(loss5);
        setElo5(elo5);
        setLp5(lp5);
        setwr5(formato(wr5));

        /*SNG Manolos*/ 
        const url6=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp6 = await fetch (url6);
        const data6 = await resp6.json(); 
        const wins6 = data6[0].wins;
        const loss6 = data6[0].losses;
        const elo6 = data6[0].tier+' '+data6[0].rank;
        const lp6 = data6[0].leaguePoints
        const wr6 = (wins6)/(wins6+loss6);   
         
        setWins6(wins6);
        setLosss6(loss6);
        setElo6(elo6);
        setLp6(lp6);
        setwr6(formato(wr6));

        /*SNG Ruben*/ 
        const url7=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp7 = await fetch (url7);
        const data7 = await resp7.json(); 
        const wins7 = data7[0].wins;
        const loss7 = data7[0].losses;
        const elo7 = data7[0].tier+' '+data7[0].rank;
        const lp7 = data7[0].leaguePoints
        const wr7 = (wins7)/(wins7+loss7);   
         
        setWins7(wins7);
        setLosss7(loss7);
        setElo7(elo7);
        setLp7(lp7);
        setwr7(formato(wr7));

        /*SNG GBirou667*/ 
        const url8=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp8 = await fetch (url8);
        const data8 = await resp8.json(); 
        const wins8 = data8[0].wins;
        const loss8 = data8[0].losses;
        const elo8 = data8[0].tier+' '+data8[0].rank;
        const lp8 = data8[0].leaguePoints
        const wr8 = (wins8)/(wins8+loss8);   
        
        setWins8(wins8);
        setLosss8(loss8);
        setElo8(elo8);
        setLp8(lp8);
        setwr8(formato(wr8));

        /*SNG Cross*/ 
        const url9=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp9 = await fetch (url9);
        const data9 = await resp9.json(); 
        const wins9 = data9[0].wins;
        const loss9 = data9[0].losses;
        const elo9 = data9[0].tier+' '+data9[0].rank;
        const lp9 = data9[0].leaguePoints
        const wr9 = (wins9)/(wins9+loss9);   
        
        setWins9(wins9);
        setLosss9(loss9);
        setElo9(elo9);
        setLp9(lp9);
        setwr9(formato(wr9));

        /*PepsiBoy*/ 
        const url10=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp10 = await fetch (url10);
        const data10 = await resp10.json(); 
        const wins10 = data10[0].wins;
        const loss10 = data10[0].losses;
        const elo10 = data10[0].tier+' '+data10[0].rank;
        const lp10 = data10[0].leaguePoints
        const wr10 = (wins10)/(wins10+loss10);   
        
        setWins10(wins10);
        setLosss10(loss10);
        setElo10(elo10);
        setLp10(lp10);
        setwr10(formato(wr10));

        /*Khino*/ 
        const url11=`https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/RSkFpRAuBvBtKdGsT1JwHUDRQicowAVoFUX15W4GjgY1fQ?api_key=RGAPI-475ed488-b72a-4e35-8603-049c5439fcb1`;
        const resp11 = await fetch (url11);
        const data11 = await resp11.json(); 
        const wins11 = data11[0].wins;
        const loss11 = data11[0].losses;
        const elo11 = data11[0].tier+' '+data11[0].rank;
        const lp11 = data11[0].leaguePoints
        const wr11 = (wins11)/(wins11+loss11);   
        
        setWins11(wins11);
        setLosss11(loss11);
        setElo11(elo11);
        setLp11(lp11);
        setwr11(formato(wr11));
    }


    /* Pintar tabla*/
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
                    <th scope="col">Win Rate</th>
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
                        <td>{wins}</td>
                        <td>{loss}</td>
                        <td>{wr}</td>
                        <td>{elo}</td>
                        <td>{lp}</td>
                        <td>Sus dos peores lineas</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Luisinked</td>
                        <td>{wins1}</td>
                        <td>{loss1}</td>
                        <td>{wr1}</td>
                        <td>{elo1}</td>
                        <td>{lp1}</td>
                        <td>Sus dos peores lineas</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Dante621</td>
                        <td>{wins}</td>
                        <td>{loss}</td>
                        <td>{wr}</td>
                        <td>{elo}</td>
                        <td>{lp}</td>
                        <td>Sett/Garen</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Humber7o</td>
                        <td>{wins}</td>
                        <td>{loss}</td>
                        <td>{wr}</td>
                        <td>{elo}</td>
                        <td>{lp}</td>
                        <td>Only main</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Señor Quesito</td>
                        <td>{wins}</td>
                        <td>{loss}</td>
                        <td>{wr}</td>
                        <td>{elo}</td>
                        <td>{lp}</td>
                        <td>Only main</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>ThothMon</td>
                        <td>{wins2}</td>
                        <td>{loss2}</td>
                        <td>{wr2}</td>
                        <td>{elo2}</td>
                        <td>{lp2}</td>
                        <td>Only main</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Fiesta Duck</td>
                        <td>{wins}</td>
                        <td>{loss}</td>
                        <td>{wr}</td>
                        <td>{elo}</td>
                        <td>{lp}</td>
                        <td>Sus dos peores lineas</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>SNG Manolos</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>SNG Ruben</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>SNG GBirou667</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>SNG Cross</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Sus dos peores lineas</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>PepsiBoy</td>
                        <td>2</td>
                        <td>2</td>
                        <td>Oro 4</td>
                        <td>28</td>
                        <td>Autofill</td>
                        <td><a href='https://lan.op.gg/summoner/userName=dante621' rel="noopener noreferrer" target='_blank'><img src={oplogo} alt='OP.gg' className='img-fluid oplogo'/></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
       </>
    )
}
