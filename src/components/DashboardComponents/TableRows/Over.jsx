import { styled, TableCell, tableCellClasses } from '@mui/material';
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

export function Over({ rowData, op }) {
  const resultSum = rowData.result_ft_casa + rowData.result_ft_visitante;

  if (resultSum > op) {
    return (
      <Tooltip title={<TooltipTitle row={rowData} />}>
        <StyledTableCellGreen align="center">
          {rowData.result_ft_casa + 'x' + rowData.result_ft_visitante}
        </StyledTableCellGreen>
      </Tooltip>
    );
  }

  if (rowData.result_ft_casa === 'undef') {
    return (
      <Tooltip title={<TooltipTitle row={rowData} />} placement="top-start">
        <StyledTableCellRed align="center">-</StyledTableCellRed>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={<TooltipTitle row={rowData} />} placement="top-start">
      <StyledTableCellRed align="center">
        {rowData.result_ft_casa + 'x' + rowData.result_ft_visitante}
      </StyledTableCellRed>
    </Tooltip>
  );
}
