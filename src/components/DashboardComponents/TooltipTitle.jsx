import { Fragment } from 'react';
import { dateFormatWithHours } from '../../functions/formatters';

export function TooltipTitle({ row }) {
  return (
    <Fragment>
      {row.time_casa && row.time_casa ? (
        <p className="text-white text-lg font-medium">
          {row.time_casa + ' x ' + row.time_visitante}
        </p>
      ) : (
        <p className="text-white text-lg font-medium">Time não encontrado</p>
      )}
      <b>FT {row.result_ft === '- undefined' ? '' : row.result_ft}</b>
      <br />
      <b>HT {row.result_ht_correct_score}</b>
      <br />
      <em>{row.minuto_jogo}</em>
      <br />
      <em>{row.minuto_jogo}</em>
      <br />
      <em>{dateFormatWithHours(row.dt_atualizacao) || ''}</em>
    </Fragment>
  );
}
