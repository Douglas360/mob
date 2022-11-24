import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';

import { AmbasMarcamSim } from './Filtros/ambasMarcamSim';
import { AmbasMarcamNao } from './Filtros/ambasMarcamNao';
import { Over } from './Filtros/over';
import { Under } from './Filtros/under';
import { CasaMarca } from './Filtros/casaMarca';
import { ForaMarca } from './Filtros/foraMarca';
import { EmpateHT } from './Filtros/empateHT';
import moment from "moment";



export function ResultComponent(liga) {
    const date_create = new Date()
    const day = date_create.getDate()
    const month = date_create.getMonth() + 1
    const year = date_create.getFullYear()
    const hour = date_create.getHours()
    const minute = date_create.getMinutes()
    const second = date_create.getSeconds()

    const today = `${year}-${month}-${day} ${hour}:${minute}:${second}`

    console.log(today)


    const column = [
        { id: 1, value: 'Hora' },
        { id: 2, value: 2 },
        { id: 3, value: 5 },
        { id: 4, value: 8 },
        { id: 5, value: 11 },
        { id: 6, value: 14 },
        { id: 7, value: 17 },
        { id: 8, value: 20 },
        { id: 9, value: 23 },
        { id: 10, value: 26 },
        { id: 11, value: 29 },
        { id: 12, value: 32 },
        { id: 13, value: 35 },
        { id: 14, value: 38 },
        { id: 15, value: 41 },
        { id: 16, value: 44 },
        { id: 17, value: 47 },
        { id: 18, value: 50 },
        { id: 19, value: 53 },
        { id: 20, value: 56 },
        { id: 21, value: 59 },
    ]


    return (


        <div className="min-h-screen max-h-full max-w-full bg-dark-pn rounded-md m-2 p-2 text-center">
            <nav>
                <span className='bg-red-600 rounded-lg p-0.5 mx-1 shadow-lg' >50%</span>
                <span className='text-lg'>{liga.liga}</span>

                <span className='bg-green-600 rounded-lg p-0.5 mx-1' >50%</span>

            </nav>

            {liga.Filtro === 'AMS' /*Ambas Marcam */
                ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                    <Table className='max-w-full' size="small">
                        <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                            <TableRow>
                                {column.map((row) => (
                                    <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <AmbasMarcamSim Liga={liga} Hora='23' />
                        <AmbasMarcamSim Liga={liga} Hora='22' />
                        <AmbasMarcamSim Liga={liga} Hora='21' />
                        <AmbasMarcamSim Liga={liga} Hora='20' />
                        <AmbasMarcamSim Liga={liga} Hora='19' />
                        <AmbasMarcamSim Liga={liga} Hora='18' />
                        <AmbasMarcamSim Liga={liga} Hora='17' />
                        <AmbasMarcamSim Liga={liga} Hora='16' />
                        <AmbasMarcamSim Liga={liga} Hora='15' />
                        <AmbasMarcamSim Liga={liga} Hora='14' />
                        <AmbasMarcamSim Liga={liga} Hora='13' />
                        <AmbasMarcamSim Liga={liga} Hora='12' />
                        <AmbasMarcamSim Liga={liga} Hora='11' />
                        <AmbasMarcamSim Liga={liga} Hora='10' />
                        <AmbasMarcamSim Liga={liga} Hora='9' />
                        <AmbasMarcamSim Liga={liga} Hora='8' />
                        <AmbasMarcamSim Liga={liga} Hora='7' />
                        <AmbasMarcamSim Liga={liga} Hora='6' />
                        <AmbasMarcamSim Liga={liga} Hora='5' />
                        <AmbasMarcamSim Liga={liga} Hora='4' />
                        <AmbasMarcamSim Liga={liga} Hora='3' />
                        <AmbasMarcamSim Liga={liga} Hora='2.' />
                        <AmbasMarcamSim Liga={liga} Hora='1.' />
                        <AmbasMarcamSim Liga={liga} Hora='0.' />



                    </Table>

                </TableContainer>

                : liga.Filtro === 'AMN' /*Ambas Nao Marcam*/
                    ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                        <Table className='max-w-full' size="small">
                            <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                <TableRow>
                                    {column.map((row) => (
                                        <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <AmbasMarcamNao Liga={liga} Hora='23' />
                            <AmbasMarcamNao Liga={liga} Hora='22' />
                            <AmbasMarcamNao Liga={liga} Hora='21' />
                            <AmbasMarcamNao Liga={liga} Hora='20' />
                            <AmbasMarcamNao Liga={liga} Hora='19' />
                            <AmbasMarcamNao Liga={liga} Hora='18' />
                            <AmbasMarcamNao Liga={liga} Hora='17' />
                            <AmbasMarcamNao Liga={liga} Hora='16' />
                            <AmbasMarcamNao Liga={liga} Hora='15' />
                            <AmbasMarcamNao Liga={liga} Hora='14' />
                            <AmbasMarcamNao Liga={liga} Hora='13' />
                            <AmbasMarcamNao Liga={liga} Hora='12' />
                            <AmbasMarcamNao Liga={liga} Hora='11' />
                            <AmbasMarcamNao Liga={liga} Hora='10' />
                            <AmbasMarcamNao Liga={liga} Hora='9' />
                            <AmbasMarcamNao Liga={liga} Hora='8' />
                            <AmbasMarcamNao Liga={liga} Hora='7' />
                            <AmbasMarcamNao Liga={liga} Hora='6' />
                            <AmbasMarcamNao Liga={liga} Hora='5' />
                            <AmbasMarcamNao Liga={liga} Hora='4' />
                            <AmbasMarcamNao Liga={liga} Hora='3' />
                            <AmbasMarcamNao Liga={liga} Hora='2.' />
                            <AmbasMarcamNao Liga={liga} Hora='1.' />

                        </Table>

                    </TableContainer>

                    : liga.Filtro === 'O05' /*Over0,5 */
                        ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                            <Table className='max-w-full' size="small">
                                <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                    <TableRow>
                                        {column.map((row) => (
                                            <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>

                                <Over Liga={liga} Hora='23' Op='0.5' />
                                <Over Liga={liga} Hora='22' Op='0.5' />
                                <Over Liga={liga} Hora='21' Op='0.5' />
                                <Over Liga={liga} Hora='20' Op='0.5' />
                                <Over Liga={liga} Hora='19' Op='0.5' />
                                <Over Liga={liga} Hora='18' Op='0.5' />
                                <Over Liga={liga} Hora='17' Op='0.5' />
                                <Over Liga={liga} Hora='16' Op='0.5' />
                                <Over Liga={liga} Hora='15' Op='0.5' />
                                <Over Liga={liga} Hora='14' Op='0.5' />
                                <Over Liga={liga} Hora='13' Op='0.5' />
                                <Over Liga={liga} Hora='12' Op='0.5' />
                                <Over Liga={liga} Hora='11' Op='0.5' />
                                <Over Liga={liga} Hora='10' Op='0.5' />
                                <Over Liga={liga} Hora='9' Op='0.5' />
                                <Over Liga={liga} Hora='8' Op='0.5' />
                                <Over Liga={liga} Hora='7' Op='0.5' />
                                <Over Liga={liga} Hora='6' Op='0.5' />
                                <Over Liga={liga} Hora='5' Op='0.5' />
                                <Over Liga={liga} Hora='4' Op='0.5' />
                                <Over Liga={liga} Hora='3' Op='0.5' />
                                <Over Liga={liga} Hora='2.' Op='0.5' />
                                <Over Liga={liga} Hora='1.' Op='0.5' />

                            </Table>

                        </TableContainer>

                        : liga.Filtro === 'O15' /* Over 1,5*/
                            ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                <Table className='max-w-full' size="small">
                                    <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                        <TableRow>
                                            {column.map((row) => (
                                                <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>

                                    <Over Liga={liga} Hora='23' Op='1.5' />
                                    <Over Liga={liga} Hora='22' Op='1.5' />
                                    <Over Liga={liga} Hora='21' Op='1.5' />
                                    <Over Liga={liga} Hora='20' Op='1.5' />
                                    <Over Liga={liga} Hora='19' Op='1.5' />
                                    <Over Liga={liga} Hora='18' Op='1.5' />
                                    <Over Liga={liga} Hora='17' Op='1.5' />
                                    <Over Liga={liga} Hora='16' Op='1.5' />
                                    <Over Liga={liga} Hora='15' Op='1.5' />
                                    <Over Liga={liga} Hora='14' Op='1.5' />
                                    <Over Liga={liga} Hora='13' Op='1.5' />
                                    <Over Liga={liga} Hora='12' Op='1.5' />
                                    <Over Liga={liga} Hora='11' Op='1.5' />
                                    <Over Liga={liga} Hora='10' Op='1.5' />
                                    <Over Liga={liga} Hora='9' Op='1.5' />
                                    <Over Liga={liga} Hora='8' Op='1.5' />
                                    <Over Liga={liga} Hora='7' Op='1.5' />
                                    <Over Liga={liga} Hora='6' Op='1.5' />
                                    <Over Liga={liga} Hora='5' Op='1.5' />
                                    <Over Liga={liga} Hora='4' Op='1.5' />
                                    <Over Liga={liga} Hora='3' Op='1.5' />
                                    <Over Liga={liga} Hora='2.' Op='1.5' />
                                    <Over Liga={liga} Hora='1.' Op='1.5' />

                                </Table>

                            </TableContainer>

                            : liga.Filtro === 'O25' /* Over 2,5*/
                                ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                    <Table className='max-w-full' size="small">
                                        <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                            <TableRow>
                                                {column.map((row) => (
                                                    <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>

                                        <Over Liga={liga} Hora='23' Op='2.5' />
                                        <Over Liga={liga} Hora='22' Op='2.5' />
                                        <Over Liga={liga} Hora='22' Op='2.5' />
                                        <Over Liga={liga} Hora='22' Op='2.5' />
                                        <Over Liga={liga} Hora='21' Op='2.5' />
                                        <Over Liga={liga} Hora='20' Op='2.5' />
                                        <Over Liga={liga} Hora='19' Op='2.5' />
                                        <Over Liga={liga} Hora='18' Op='2.5' />
                                        <Over Liga={liga} Hora='17' Op='2.5' />
                                        <Over Liga={liga} Hora='16' Op='2.5' />
                                        <Over Liga={liga} Hora='15' Op='2.5' />
                                        <Over Liga={liga} Hora='14' Op='2.5' />
                                        <Over Liga={liga} Hora='13' Op='2.5' />
                                        <Over Liga={liga} Hora='12' Op='2.5' />
                                        <Over Liga={liga} Hora='11' Op='2.5' />
                                        <Over Liga={liga} Hora='10' Op='2.5' />
                                        <Over Liga={liga} Hora='9' Op='2.5' />
                                        <Over Liga={liga} Hora='8' Op='2.5' />
                                        <Over Liga={liga} Hora='7' Op='2.5' />
                                        <Over Liga={liga} Hora='6' Op='2.5' />
                                        <Over Liga={liga} Hora='5' Op='2.5' />
                                        <Over Liga={liga} Hora='4' Op='2.5' />
                                        <Over Liga={liga} Hora='3' Op='2.5' />
                                        <Over Liga={liga} Hora='2.' Op='2.5' />
                                        <Over Liga={liga} Hora='1.' Op='2.5' />

                                    </Table>

                                </TableContainer>

                                : liga.Filtro === 'O35' /* Over 3,5 */
                                    ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                        <Table className='max-w-full' size="small">
                                            <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                                <TableRow>
                                                    {column.map((row) => (
                                                        <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>

                                            <Over Liga={liga} Hora='23' Op='3.5' />
                                            <Over Liga={liga} Hora='22' Op='3.5' />
                                            <Over Liga={liga} Hora='22' Op='3.5' />
                                            <Over Liga={liga} Hora='22' Op='3.5' />
                                            <Over Liga={liga} Hora='21' Op='3.5' />
                                            <Over Liga={liga} Hora='20' Op='3.5' />
                                            <Over Liga={liga} Hora='19' Op='3.5' />
                                            <Over Liga={liga} Hora='18' Op='3.5' />
                                            <Over Liga={liga} Hora='17' Op='3.5' />
                                            <Over Liga={liga} Hora='16' Op='3.5' />
                                            <Over Liga={liga} Hora='15' Op='3.5' />
                                            <Over Liga={liga} Hora='14' Op='3.5' />
                                            <Over Liga={liga} Hora='13' Op='3.5' />
                                            <Over Liga={liga} Hora='12' Op='3.5' />
                                            <Over Liga={liga} Hora='11' Op='3.5' />
                                            <Over Liga={liga} Hora='10' Op='3.5' />
                                            <Over Liga={liga} Hora='9' Op='3.5' />
                                            <Over Liga={liga} Hora='8' Op='3.5' />
                                            <Over Liga={liga} Hora='7' Op='3.5' />
                                            <Over Liga={liga} Hora='6' Op='3.5' />
                                            <Over Liga={liga} Hora='5' Op='3.5' />
                                            <Over Liga={liga} Hora='4' Op='3.5' />
                                            <Over Liga={liga} Hora='3' Op='3.5' />
                                            <Over Liga={liga} Hora='2.' Op='3.5' />
                                            <Over Liga={liga} Hora='1.' Op='3.5' />

                                        </Table>

                                    </TableContainer>

                                    : liga.Filtro === 'U05' /* Under 0,5 */
                                        ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                            <Table className='max-w-full' size="small">
                                                <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                                    <TableRow>
                                                        {column.map((row) => (
                                                            <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableHead>

                                                <Under Liga={liga} Hora='23' Op='0.5' />
                                                <Under Liga={liga} Hora='22' Op='0.5' />
                                                <Under Liga={liga} Hora='22' Op='0.5' />
                                                <Under Liga={liga} Hora='22' Op='0.5' />
                                                <Under Liga={liga} Hora='21' Op='0.5' />
                                                <Under Liga={liga} Hora='20' Op='0.5' />
                                                <Under Liga={liga} Hora='19' Op='0.5' />
                                                <Under Liga={liga} Hora='18' Op='0.5' />
                                                <Under Liga={liga} Hora='17' Op='0.5' />
                                                <Under Liga={liga} Hora='16' Op='0.5' />
                                                <Under Liga={liga} Hora='15' Op='0.5' />
                                                <Under Liga={liga} Hora='14' Op='0.5' />
                                                <Under Liga={liga} Hora='13' Op='0.5' />
                                                <Under Liga={liga} Hora='12' Op='0.5' />
                                                <Under Liga={liga} Hora='11' Op='0.5' />
                                                <Under Liga={liga} Hora='10' Op='0.5' />
                                                <Under Liga={liga} Hora='9' Op='0.5' />
                                                <Under Liga={liga} Hora='8' Op='0.5' />
                                                <Under Liga={liga} Hora='7' Op='0.5' />
                                                <Under Liga={liga} Hora='6' Op='0.5' />
                                                <Under Liga={liga} Hora='5' Op='0.5' />
                                                <Under Liga={liga} Hora='4' Op='0.5' />
                                                <Under Liga={liga} Hora='3' Op='0.5' />
                                                <Under Liga={liga} Hora='2.' Op='0.5' />
                                                <Under Liga={liga} Hora='1.' Op='0.5' />

                                            </Table>

                                        </TableContainer>

                                        : liga.Filtro === 'U15' /* Under 1,5 */
                                            ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                                <Table className='max-w-full' size="small">
                                                    <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                                        <TableRow>
                                                            {column.map((row) => (
                                                                <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                            ))}
                                                        </TableRow>
                                                    </TableHead>

                                                    <Under Liga={liga} Hora='23' Op='1.5' />
                                                    <Under Liga={liga} Hora='22' Op='1.5' />
                                                    <Under Liga={liga} Hora='22' Op='1.5' />
                                                    <Under Liga={liga} Hora='22' Op='1.5' />
                                                    <Under Liga={liga} Hora='21' Op='1.5' />
                                                    <Under Liga={liga} Hora='20' Op='1.5' />
                                                    <Under Liga={liga} Hora='19' Op='1.5' />
                                                    <Under Liga={liga} Hora='18' Op='1.5' />
                                                    <Under Liga={liga} Hora='17' Op='1.5' />
                                                    <Under Liga={liga} Hora='16' Op='1.5' />
                                                    <Under Liga={liga} Hora='15' Op='1.5' />
                                                    <Under Liga={liga} Hora='14' Op='1.5' />
                                                    <Under Liga={liga} Hora='13' Op='1.5' />
                                                    <Under Liga={liga} Hora='12' Op='1.5' />
                                                    <Under Liga={liga} Hora='11' Op='1.5' />
                                                    <Under Liga={liga} Hora='10' Op='1.5' />
                                                    <Under Liga={liga} Hora='9' Op='1.5' />
                                                    <Under Liga={liga} Hora='8' Op='1.5' />
                                                    <Under Liga={liga} Hora='7' Op='1.5' />
                                                    <Under Liga={liga} Hora='6' Op='1.5' />
                                                    <Under Liga={liga} Hora='5' Op='1.5' />
                                                    <Under Liga={liga} Hora='4' Op='1.5' />
                                                    <Under Liga={liga} Hora='3' Op='1.5' />
                                                    <Under Liga={liga} Hora='2.' Op='1.5' />
                                                    <Under Liga={liga} Hora='1.' Op='1.5' />

                                                </Table>

                                            </TableContainer>

                                            : liga.Filtro === 'U25' /* Under 2,5 */
                                                ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                                    <Table className='max-w-full' size="small">
                                                        <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                                            <TableRow>
                                                                {column.map((row) => (
                                                                    <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                                ))}
                                                            </TableRow>
                                                        </TableHead>

                                                        <Under Liga={liga} Hora='23' Op='2.5' />
                                                        <Under Liga={liga} Hora='22' Op='2.5' />
                                                        <Under Liga={liga} Hora='22' Op='2.5' />
                                                        <Under Liga={liga} Hora='22' Op='2.5' />
                                                        <Under Liga={liga} Hora='21' Op='2.5' />
                                                        <Under Liga={liga} Hora='20' Op='2.5' />
                                                        <Under Liga={liga} Hora='19' Op='2.5' />
                                                        <Under Liga={liga} Hora='18' Op='2.5' />
                                                        <Under Liga={liga} Hora='17' Op='2.5' />
                                                        <Under Liga={liga} Hora='16' Op='2.5' />
                                                        <Under Liga={liga} Hora='15' Op='2.5' />
                                                        <Under Liga={liga} Hora='14' Op='2.5' />
                                                        <Under Liga={liga} Hora='13' Op='2.5' />
                                                        <Under Liga={liga} Hora='12' Op='2.5' />
                                                        <Under Liga={liga} Hora='11' Op='2.5' />
                                                        <Under Liga={liga} Hora='10' Op='2.5' />
                                                        <Under Liga={liga} Hora='9' Op='2.5' />
                                                        <Under Liga={liga} Hora='8' Op='2.5' />
                                                        <Under Liga={liga} Hora='7' Op='2.5' />
                                                        <Under Liga={liga} Hora='6' Op='2.5' />
                                                        <Under Liga={liga} Hora='5' Op='2.5' />
                                                        <Under Liga={liga} Hora='4' Op='2.5' />
                                                        <Under Liga={liga} Hora='3' Op='2.5' />
                                                        <Under Liga={liga} Hora='2.' Op='2.5' />
                                                        <Under Liga={liga} Hora='1.' Op='2.5' />

                                                    </Table>

                                                </TableContainer>

                                                : liga.Filtro === 'U35' /* Under 3,5 */
                                                    ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                                        <Table className='max-w-full' size="small">
                                                            <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                                                <TableRow>
                                                                    {column.map((row) => (
                                                                        <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                                    ))}
                                                                </TableRow>
                                                            </TableHead>

                                                            <Under Liga={liga} Hora='23' Op='3.5' />
                                                            <Under Liga={liga} Hora='22' Op='3.5' />
                                                            <Under Liga={liga} Hora='22' Op='3.5' />
                                                            <Under Liga={liga} Hora='22' Op='3.5' />
                                                            <Under Liga={liga} Hora='21' Op='3.5' />
                                                            <Under Liga={liga} Hora='20' Op='3.5' />
                                                            <Under Liga={liga} Hora='19' Op='3.5' />
                                                            <Under Liga={liga} Hora='18' Op='3.5' />
                                                            <Under Liga={liga} Hora='17' Op='3.5' />
                                                            <Under Liga={liga} Hora='16' Op='3.5' />
                                                            <Under Liga={liga} Hora='15' Op='3.5' />
                                                            <Under Liga={liga} Hora='14' Op='3.5' />
                                                            <Under Liga={liga} Hora='13' Op='3.5' />
                                                            <Under Liga={liga} Hora='12' Op='3.5' />
                                                            <Under Liga={liga} Hora='11' Op='3.5' />
                                                            <Under Liga={liga} Hora='10' Op='3.5' />
                                                            <Under Liga={liga} Hora='9' Op='3.5' />
                                                            <Under Liga={liga} Hora='8' Op='3.5' />
                                                            <Under Liga={liga} Hora='7' Op='3.5' />
                                                            <Under Liga={liga} Hora='6' Op='3.5' />
                                                            <Under Liga={liga} Hora='5' Op='3.5' />
                                                            <Under Liga={liga} Hora='4' Op='3.5' />
                                                            <Under Liga={liga} Hora='3' Op='3.5' />
                                                            <Under Liga={liga} Hora='2.' Op='3.5' />
                                                            <Under Liga={liga} Hora='1.' Op='3.5' />

                                                        </Table>

                                                    </TableContainer>

                                                    : liga.Filtro === 'CM' /* Casa Marca */
                                                        ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                                            <Table className='max-w-full' size="small">
                                                                <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                                                    <TableRow>
                                                                        {column.map((row) => (
                                                                            <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                                        ))}
                                                                    </TableRow>
                                                                </TableHead>

                                                                <CasaMarca Liga={liga} Hora='23' />
                                                                <CasaMarca Liga={liga} Hora='22' />
                                                                <CasaMarca Liga={liga} Hora='22' />
                                                                <CasaMarca Liga={liga} Hora='22' />
                                                                <CasaMarca Liga={liga} Hora='21' />
                                                                <CasaMarca Liga={liga} Hora='20' />
                                                                <CasaMarca Liga={liga} Hora='19' />
                                                                <CasaMarca Liga={liga} Hora='18' />
                                                                <CasaMarca Liga={liga} Hora='17' />
                                                                <CasaMarca Liga={liga} Hora='16' />
                                                                <CasaMarca Liga={liga} Hora='15' />
                                                                <CasaMarca Liga={liga} Hora='14' />
                                                                <CasaMarca Liga={liga} Hora='13' />
                                                                <CasaMarca Liga={liga} Hora='12' />
                                                                <CasaMarca Liga={liga} Hora='11' />
                                                                <CasaMarca Liga={liga} Hora='10' />
                                                                <CasaMarca Liga={liga} Hora='9' />
                                                                <CasaMarca Liga={liga} Hora='8' />
                                                                <CasaMarca Liga={liga} Hora='7' />
                                                                <CasaMarca Liga={liga} Hora='6' />
                                                                <CasaMarca Liga={liga} Hora='5' />
                                                                <CasaMarca Liga={liga} Hora='4' />
                                                                <CasaMarca Liga={liga} Hora='3' />
                                                                <CasaMarca Liga={liga} Hora='2.' />
                                                                <CasaMarca Liga={liga} Hora='1.' />

                                                            </Table>

                                                        </TableContainer>

                                                        : liga.Filtro === 'FM' /* Casa Marca */
                                                            ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                                                <Table className='max-w-full' size="small">
                                                                    <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                                                        <TableRow>
                                                                            {column.map((row) => (
                                                                                <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                                            ))}
                                                                        </TableRow>
                                                                    </TableHead>

                                                                    <ForaMarca Liga={liga} Hora='23' />
                                                                    <ForaMarca Liga={liga} Hora='22' />
                                                                    <ForaMarca Liga={liga} Hora='22' />
                                                                    <ForaMarca Liga={liga} Hora='22' />
                                                                    <ForaMarca Liga={liga} Hora='21' />
                                                                    <ForaMarca Liga={liga} Hora='20' />
                                                                    <ForaMarca Liga={liga} Hora='19' />
                                                                    <ForaMarca Liga={liga} Hora='18' />
                                                                    <ForaMarca Liga={liga} Hora='17' />
                                                                    <ForaMarca Liga={liga} Hora='16' />
                                                                    <ForaMarca Liga={liga} Hora='15' />
                                                                    <ForaMarca Liga={liga} Hora='14' />
                                                                    <ForaMarca Liga={liga} Hora='13' />
                                                                    <ForaMarca Liga={liga} Hora='12' />
                                                                    <ForaMarca Liga={liga} Hora='11' />
                                                                    <ForaMarca Liga={liga} Hora='10' />
                                                                    <ForaMarca Liga={liga} Hora='9' />
                                                                    <ForaMarca Liga={liga} Hora='8' />
                                                                    <ForaMarca Liga={liga} Hora='7' />
                                                                    <ForaMarca Liga={liga} Hora='6' />
                                                                    <ForaMarca Liga={liga} Hora='5' />
                                                                    <ForaMarca Liga={liga} Hora='4' />
                                                                    <ForaMarca Liga={liga} Hora='3' />
                                                                    <ForaMarca Liga={liga} Hora='2.' />
                                                                    <ForaMarca Liga={liga} Hora='1.' />

                                                                </Table>

                                                            </TableContainer>

                                                            : liga.Filtro === 'EHT' /* Empate HT */
                                                                ? <TableContainer className='mt-4 max-w-full' component={Paper}>
                                                                    <Table className='max-w-full' size="small">
                                                                        <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                                                            <TableRow>
                                                                                {column.map((row) => (
                                                                                    <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                                                ))}
                                                                            </TableRow>
                                                                        </TableHead>

                                                                        <EmpateHT Liga={liga} Hora='23' />
                                                                        <EmpateHT Liga={liga} Hora='22' />
                                                                        <EmpateHT Liga={liga} Hora='22' />
                                                                        <EmpateHT Liga={liga} Hora='22' />
                                                                        <EmpateHT Liga={liga} Hora='21' />
                                                                        <EmpateHT Liga={liga} Hora='20' />
                                                                        <EmpateHT Liga={liga} Hora='19' />
                                                                        <EmpateHT Liga={liga} Hora='18' />
                                                                        <EmpateHT Liga={liga} Hora='17' />
                                                                        <EmpateHT Liga={liga} Hora='16' />
                                                                        <EmpateHT Liga={liga} Hora='15' />
                                                                        <EmpateHT Liga={liga} Hora='14' />
                                                                        <EmpateHT Liga={liga} Hora='13' />
                                                                        <EmpateHT Liga={liga} Hora='12' />
                                                                        <EmpateHT Liga={liga} Hora='11' />
                                                                        <EmpateHT Liga={liga} Hora='10' />
                                                                        <EmpateHT Liga={liga} Hora='9' />
                                                                        <EmpateHT Liga={liga} Hora='8' />
                                                                        <EmpateHT Liga={liga} Hora='7' />
                                                                        <EmpateHT Liga={liga} Hora='6' />
                                                                        <EmpateHT Liga={liga} Hora='5' />
                                                                        <EmpateHT Liga={liga} Hora='4' />
                                                                        <EmpateHT Liga={liga} Hora='3' />
                                                                        <EmpateHT Liga={liga} Hora='2.' />
                                                                        <EmpateHT Liga={liga} Hora='1.' />

                                                                    </Table>

                                                                </TableContainer>

                                                                : <TableContainer className='mt-4 max-w-full' component={Paper}>
                                                                    <Table className='max-w-full' size="small">
                                                                        <TableHead className='rounded-lg p-0.5 mx-1 shadow-lg'>
                                                                            <TableRow>
                                                                                {column.map((row) => (
                                                                                    <TableCell key={row.id} align='center'>{row.value}</TableCell>
                                                                                ))}
                                                                            </TableRow>
                                                                        </TableHead>

                                                                        <AmbasMarcamSim Liga={liga} Hora='23' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='22' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='21' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='20' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='19' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='18' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='17' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='16' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='15' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='14' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='13' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='12' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='11' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='10' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='9' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='8' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='7' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='6' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='5' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='4' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='3' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='2.' />
                                                                        <AmbasMarcamSim Liga={liga} Hora='1.' />

                                                                    </Table>

                                                                </TableContainer>


            }



        </div>

    )
}

