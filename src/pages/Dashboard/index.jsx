import { useState } from 'react'

import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material'

import { Filtros } from '../../components/DashboardComponents'


import { Header } from '../../components/LayoutComponents/Header'




export function Dashboard() {


    const [isChecked, setIschecked] = useState(true)
    const [isCheckedCopa, setIscheckedCopa] = useState(false)
    const [isCheckedPremier, setIscheckedPremier] = useState(false)
    const [isCheckedSuper, setIscheckedSuper] = useState(false)




    const handleChangeEuro = () => {
        setIschecked(true)
        setIscheckedCopa(false)
        setIscheckedPremier(false)
        setIscheckedSuper(false)

    }

    const handleChangeCopa = () => {
        setIschecked(false)
        setIscheckedPremier(false)
        setIscheckedSuper(false)
        setIscheckedCopa(true)

    }

    const handleChangePremier = () => {
        setIschecked(false)
        setIscheckedCopa(false)
        setIscheckedSuper(false)
        setIscheckedPremier(true)

    }

    const handleChangeSuper = () => {
        setIschecked(false)
        setIscheckedCopa(false)
        setIscheckedPremier(false)
        setIscheckedSuper(true)


    }

    return (

        <div className="min-h-full ">
            <Header />
            <main>
                <div className='container mx-auto max-w-full p-2 flex-col md:flex-row text-white'>

                    <div className="flex justify-center " >

                        <div className="w-1/2 h-24 bg-slate-700 rounded-md p-1 mx-2 shadow-lg text-center">
                            <FormGroup>
                                <Typography>Euro Cup</Typography>

                                <FormControlLabel className="p-2" control={
                                    <Switch size='big'
                                        checked={isChecked}
                                        onChange={handleChangeEuro} />
                                } />

                            </FormGroup>

                        </div>

                        <div className="w-1/2 bg-slate-700 rounded-md p-1 mx-2 shadow-lg text-center">
                            <FormGroup>
                                <Typography>Copa Do Mundo</Typography>
                                <FormControlLabel className="p-2" control={
                                    <Switch
                                        checked={isCheckedCopa}
                                        onChange={handleChangeCopa}
                                        size='big' />} />
                            </FormGroup>
                        </div>

                        <div className="w-1/2 bg-slate-700 rounded-md p-1 mx-2 shadow-lg text-center">
                            <FormGroup>
                                <Typography>Premier</Typography>
                                <FormControlLabel className="p-2" control={
                                    <Switch
                                        checked={isCheckedPremier}
                                        onChange={handleChangePremier}
                                        size='big' />} />
                            </FormGroup>
                        </div>

                        <div className="w-1/2  bg-slate-700 rounded-md p-1 mx-2 shadow-lg text-center">
                            <FormGroup>
                                <Typography>Super Liga</Typography>
                                <FormControlLabel className="p-2" control={
                                    <Switch
                                        checked={isCheckedSuper}
                                        onChange={handleChangeSuper}
                                        size='big' />} />
                            </FormGroup>
                        </div>

                    </div>


                    {isChecked === true &&
                        <Filtros liga="euro" />
                    }
                    {isCheckedCopa === true &&
                        <Filtros liga="copa" />
                    }
                    {isCheckedPremier === true &&
                        <Filtros liga="premier" />
                    }
                    {isCheckedSuper === true &&
                        <Filtros liga="super" />
                    }


                    <div>

                    </div>
                </div>
            </main>
        </div>


    )
}
