import { Fragment } from 'react';
import { Typography } from '@mui/material';

export function TooltipTitle({ row }) {
  return (
    <Fragment>
      <Typography color="inherit">
        {row.time_casa + ' x ' + row.time_visitante}
      </Typography>
      <b>{'FT ' + row.result_ft}</b>
      <br />
      <b>{'HT ' + row.result_ht_correct_score}</b>
      <br />
      <em>{row.minuto_jogo}</em>
      <br />
      <em>{row.minuto_jogo}</em>
      <br />
      <em>{row.dt_atualizacao}</em>
      {/*"It's very engaging. Right?"*/}
    </Fragment>
  );
}
