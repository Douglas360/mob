import loading from '../../assets/load.svg'

export function Loading(){
    return(
        <div className='w-full h-full flex justify-center items-center'>
            <img className='h-12' src={loading} alt='Carregando' />

            
        </div>

    )

}