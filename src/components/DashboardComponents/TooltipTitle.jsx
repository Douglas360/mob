import { dateFormatWithHours } from '../../functions/formatters';

export function TooltipTitle({ row }) {
  if (row.isEmpty) {
    return (
      <div className="text-center">
        <p className="text-white text-sm font-normal">
          Infelizmente não conseguimos capturar as informações deste horário.
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
        FT {row.result_ft === '- undefined' ? '' : row.result_ft}
      </strong>
      <br />
      <strong className="text-white text-xs">
        HT {row.result_ht_correct_score || ''}
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
