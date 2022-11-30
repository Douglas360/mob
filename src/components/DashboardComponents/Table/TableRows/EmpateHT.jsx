import { Tooltip } from '../../../Tooltip';
import { TooltipTitle } from '../../TooltipTitle';
import { TableCell } from '../TableCell';

export function EmpateHT({ rowData }) {
  const isEqual =
    rowData.result_ht_correct_score_casa ===
    rowData.result_ht_correct_score_visitante;

  if (!isEqual) {
    return (
      <Tooltip title={<TooltipTitle row={rowData} />} placement="top-start">
        <TableCell background="red">
          {rowData.result_ht_correct_score_casa === 'undef' ? 'X' : rowData.result_ht_correct_score_casa}
          {'-'}
          {rowData.result_ht_correct_score_visitante === 'undef'
            ? 'X'
            : rowData.result_ht_correct_score_visitante}
        </TableCell>
      </Tooltip>
    );
  }

  if (rowData.result_ht_correct_score_casa === 'Oth') {
    return (
      <Tooltip title={<TooltipTitle row={rowData} />}>
        <TableCell background="yellow">
          {"Oth"}
        </TableCell>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={<TooltipTitle row={rowData} />}>
      <TableCell background="green">
        {rowData.result_ht_correct_score_casa === 'undef' ? 'X' : rowData.result_ht_correct_score_casa}
        {'-'}
        {rowData.result_ht_correct_score_visitante === 'undef'
          ? 'X'
          : rowData.result_ht_correct_score_visitante}
      </TableCell>
    </Tooltip>
  );
}
