import { InputLabel, NativeSelect } from "@mui/material";
import { Fragment, useState } from "react";
import { ResultComponent } from "./resultComponent";


export function Filtros(liga) {


    const [filter, setFilter] = useState()


    function handleChange(e) {
        try {
            setFilter(e.target.value);


        } catch (err) {
            console.log("Errso: " + err)
        }
    }


    return (
        <Fragment>
            <div className="h-auto max-h-full bg-dark-pn rounded-md m-2 p-1 text-center">
                <span className='text-center'>Filtros</span>
                <div className='text-left flex justify-center p-2'>
                    <nav className='w-1/2 mr-4'>
                        <InputLabel>
                            Partidas
                        </InputLabel>
                        <NativeSelect
                            onChange={handleChange}
                            value={filter}
                            defaultValue={24}

                            inputProps={{
                                name: 'partidas',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={3}>Últimas 3 Horas</option>
                            <option value={6}>Últimas 6 Horas</option>
                            <option value={9}>Últimas 9 Horas</option>
                            <option value={12}>Últimas 12 Horas</option>
                            <option value={24}>Últimas 24 Horas</option>
                        </NativeSelect>
                    </nav>

                    <nav className='w-1/2'>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Mercados
                        </InputLabel>

                        <NativeSelect
                            value={filter}
                            onChange={handleChange}
                            defaultValue={'AMS'}
                            inputProps={{
                                name: 'partidas',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <optgroup label="Ambas Marcam">
                                <option value={'AMS'}>Ambas Marcam Sim</option>
                                <option value={'AMN'}>Ambas Marcam Não</option>
                            </optgroup>

                            <optgroup label="Empate">
                                <option value={'EHT'}>Empate HT</option>
                                <option value={'EFT'}>Empate FT</option>
                            </optgroup>

                            <optgroup label="Marca Gol">
                                <option value={'CM'}>Casa Marca</option>
                                <option value={'FM'}>Fora Marca</option>
                            </optgroup>

                            <optgroup label="Over">
                                <option value={'O05'}>Over 0,5</option>
                                <option value={'O15'}>Over 1,5</option>
                                <option value={'O25'}>Over 2,5</option>
                                <option value={'O35'}>Over 3,5</option>
                            </optgroup>

                            <optgroup label="Under">
                                <option value={'U05'}>Under 0,5</option>
                                <option value={'U15'}>Under 1,5</option>
                                <option value={'U25'}>Under 2,5</option>
                                <option value={'U35'}>Under 3,5</option>
                            </optgroup>
                        </NativeSelect>
                    </nav>

                   {/* <nav className='w-1/2 ml-4'>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Exibir
                        </InputLabel>
                        <NativeSelect
                            defaultValue={20}
                            inputProps={{
                                name: 'partidas',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Resultado HT</option>
                            <option value={20}>Resultado FT</option>

                        </NativeSelect>
                        </nav>*/}

                </div>

            </div>

            <ResultComponent liga={liga.liga} Filtro={filter} />

        </Fragment>
    )

}