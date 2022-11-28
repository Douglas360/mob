import { Tooltip } from '../../../Tooltip';
import { TooltipTitle } from '../../TooltipTitle';
import { TableCell } from '../TableCell';

export function AmbasMarcamNao({ rowData }) {
  if (rowData.result_ft_casa >= 1 && rowData.result_ft_visitante >= 1) {
    return (
      <Tooltip title={<TooltipTitle row={rowData} />}>
        <TableCell background="red">
          {rowData.result_ft_casa + '-' + rowData.result_ft_visitante}
        </TableCell>
      </Tooltip>
    );
  }

  if (rowData.result_ft_casa === 'undef') {
    return (
      <Tooltip title={<TooltipTitle row={rowData} />} placement="top-start">
        <TableCell background="red">-</TableCell>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={<TooltipTitle row={rowData} />} placement="top-start">
      <TableCell background="green">
        {rowData.result_ft_casa + '-' + rowData.result_ft_visitante}
      </TableCell>
    </Tooltip>
  );
}
