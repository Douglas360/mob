import telegram from '../../assets/telegram.svg'
export function BotaoFlutuante() {
    return(
        <>
        <div className='fixed bottom-4 m-2 w-12 opacity-50 hover:opacity-100'>
        <a href='https://t.me/SupSuperTips'><img src={telegram} alt='Suporte' /></a>
        </div>

    </>
    )
   

}