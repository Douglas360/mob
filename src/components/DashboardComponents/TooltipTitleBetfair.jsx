import { dateFormatWithHours } from '../../functions/formatters';

export function TooltipTitleBetfair({ row }) {
  if (row.isPending) {
    return (
      <div className="text-center">
        <p className="text-white text-sm font-normal">
          Resultado pendente, aguarde o início do jogo.
        </p>
      </div>
    );
  }

  if (row.isEmpty) {
    return (
      <div className="text-center">
        <p className="text-white text-sm font-normal">
          Infelizmente não conseguimos capturar as informações do horário{' '}
          {row.minuto_jogo?.padStart(5, '0')}.
        </p>
        <p className="text-white text-sm font-normal">
          Atualizaremos este evento o mais rápido possível!
        </p>
      </div>
    );
  }

  return (
    <>
      {row.time_casa ? (
        <p className="text-white text-lg font-medium">
          {row.time_casa + ' x ' + row.time_visitante}
        </p>
      ) : (
        <p className="text-white text-lg font-medium">Time não encontrado</p>
      )}
      <strong className="text-white text-xs">
        {/*FT {row.result_ft === '- undefined' ? '' : row.result_ft}*/}
        FT {row.result_ft_casa + " x " + row.result_ft_visitante}
      </strong>

      <br />
      <em className="text-white text-xs">{row.minuto_jogo || ''}</em>
      <br />
      <em className="text-white text-xs">
        {row.dt_atualizacao ? dateFormatWithHours(row.dt_atualizacao) : ''}
      </em>
    </>
  );
}
