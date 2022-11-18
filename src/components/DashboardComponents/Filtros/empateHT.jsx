import { TableCell, TableRow, tableCellClasses, Typography, styled, TableBody } from '@mui/material';
import { Fragment } from "react";
import { useFetch } from '../../../hooks/useFetch';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const StyledTableCellRed = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: '#991b1b',
        color: '#f8fafc',
        border: '1px solid black',
    }
}));

const StyledTableCellGreen = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: '#16a34a',
        color: '#f8fafc',
        border: '1px solid black',
    }
}));

const StyledTableCellYellow = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: '#ca8a04',
        color: '#f8fafc',
        border: '1px solid black',
    }
}));

const StyledTableCellGray = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: '#c1c1c1',
        marginLeft: 'auto',
        justifySelf: 'flex-end',
    }
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));


export function EmpateHT(Liga) {


    const { data } = useFetch(`/result/${Liga.Liga.liga}/${Liga.Hora}`)
    console.log("Empate HT")

    return (

        <TableBody>
            {data?.length > 0 &&
                <TableRow style={{ "width": "full" }} >
                    <StyledTableCellGray sx={{ backgroundColor: '#c1c1c1', textAlign: 'center' }}>{data[0].minuto_jogo.split(".")[0]}</StyledTableCellGray>
                    {data && data
                        .sort((a, b) => a.id_jogo > b.id_jogo ? 1 : -1)
                        .map((row) => {

                            return (

                                row.result_ht_correct_score_casa === row.result_ht_correct_score_visitante ?
                                    row.result_ht_correct_score_casa === 'Oth' ?
                                        <BootstrapTooltip title={
                                            <Fragment>
                                                <Typography color="inherit">{row.time_casa + " x " + row.time_visitante}</Typography>
                                                <b>{'FT ' + row.result_ft}</b><br />
                                                <b>{'HT ' + row.result_ht_correct_score}</b><br />
                                                <em>{row.minuto_jogo}</em><br />
                                                <em>{row.dt_atualizacao}</em>
                                                {/*"It's very engaging. Right?"*/}
                                            </Fragment>
                                        } key={row.id_jogo} placement="top-start">
                                            <StyledTableCellYellow align="center" key={row.id_jogo}>Oth</StyledTableCellYellow>
                                        </BootstrapTooltip>
                                        :
                                        <BootstrapTooltip title={
                                            <Fragment>
                                                <Typography color="inherit">{row.time_casa + " x " + row.time_visitante}</Typography>
                                                <b>{'FT ' + row.result_ft}</b><br />
                                                <b>{'HT ' + row.result_ht_correct_score}</b><br />
                                                <em>{row.minuto_jogo}</em><br />

                                                <em>{row.dt_atualizacao}</em>
                                                {/*"It's very engaging. Right?"*/}
                                            </Fragment>

                                        } key={row.id_jogo} placement="top-start">
                                            <StyledTableCellGreen align="center" >{row.result_ht_correct_score_casa + "x" + row.result_ht_correct_score_visitante}</StyledTableCellGreen>
                                        </BootstrapTooltip>
                                    :

                                    <BootstrapTooltip title={
                                        <Fragment>
                                            <Typography color="inherit">{row.time_casa + " x " + row.time_visitante}</Typography>
                                            <b>{'FT ' + row.result_ft}</b><br />
                                            <b>{'HT ' + row.result_ht_correct_score}</b><br />
                                            <em>{row.minuto_jogo}</em><br />
                                            <em>{row.dt_atualizacao}</em>
                                            {/*"It's very engaging. Right?"*/}
                                        </Fragment>
                                    } key={row.id_jogo} placement="top-start">
                                        <StyledTableCellRed align="center" >{row.result_ht_correct_score_casa + "x" + row.result_ht_correct_score_visitante}</StyledTableCellRed>
                                    </BootstrapTooltip>


                            )
                        }




                        )}
                </TableRow>
            }
        </TableBody>
    )
}