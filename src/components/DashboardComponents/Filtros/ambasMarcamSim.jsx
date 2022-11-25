import {
  TableCell,
  TableRow,
  tableCellClasses,
  styled,
  TableBody,
} from '@mui/material';
import { useFetch } from '../../../hooks/useFetch';
import { Tooltip } from '../../Tooltip';
import { TooltipTitle } from '../TooltipTitle';

const StyledTableCellRed = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: '#991b1b',
    color: '#f8fafc',
    border: '1px solid black',
  },
}));

const StyledTableCellGreen = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: '#16a34a',
    color: '#f8fafc',
    border: '1px solid black',
  },
}));

const StyledTableCellGray = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: '#c1c1c1',
    marginLeft: 'auto',
    justifySelf: 'flex-end',
  },
}));

export function AmbasMarcamSim(Liga) {
  const { data } = useFetch(`/result/${Liga.Liga.liga}/${Liga.Hora}`);

  return (
    <TableBody>
      {data && data.length > 0 && (
        <TableRow style={{ width: 'full' }}>
          <StyledTableCellGray
            sx={{ backgroundColor: '#c1c1c1', textAlign: 'center' }}
          >
            {data[0].minuto_jogo.split('.')[0]}
          </StyledTableCellGray>

          {data
            .sort((a, b) => (a.id_jogo > b.id_jogo ? 1 : -1))
            .map(row => {
              return row.result_ft_casa >= 1 && row.result_ft_visitante >= 1 ? (
                <Tooltip key={row.id_jogo} title={<TooltipTitle row={row} />}>
                  <StyledTableCellGreen align="center">
                    {row.result_ft_casa + 'x' + row.result_ft_visitante}
                  </StyledTableCellGreen>
                </Tooltip>
              ) : row.result_ft_casa === 'undef' ? (
                <Tooltip
                  title={<TooltipTitle row={row} />}
                  key={row.id_jogo}
                  placement="top-start"
                >
                  <StyledTableCellRed align="center" key={row.id_jogo}>
                    -
                  </StyledTableCellRed>
                </Tooltip>
              ) : (
                <Tooltip
                  title={<TooltipTitle row={row} />}
                  key={row.id_jogo}
                  placement="top-start"
                >
                  <StyledTableCellRed align="center">
                    {row.result_ft_casa + 'x' + row.result_ft_visitante}
                  </StyledTableCellRed>
                </Tooltip>
              );
            })}
        </TableRow>
      )}
    </TableBody>
  );
}
