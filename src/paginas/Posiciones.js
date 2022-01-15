import React from 'react'
import { Table } from '../components/Table'

import TitleTable from  '../assets/img/titulo_table.png'


export const Posiciones = () => {
    return (
        <>
        <div className='text-center'>
            <img src={TitleTable} alt='titulo de la tabla' className='img-fluid p-2'/>
        </div>
            <div className='mt-2'>

            <Table></Table>
            </div>
        </>
    )
}
