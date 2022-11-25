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

const StyledTableCellYellow = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: '#ca8a04',
    color: '#f8fafc',
    border: '1px solid black',
  },
}));

export function EmpateHT({ rowData }) {
  const isEqual =
    rowData.result_ht_correct_score_casa ===
    rowData.result_ht_correct_score_visitante;

  if (!isEqual) {
    return (
      <Tooltip title={<TooltipTitle row={rowData} />} placement="top-start">
        <StyledTableCellRed align="center">
          {rowData.result_ft_casa + 'x' + rowData.result_ft_visitante}
        </StyledTableCellRed>
      </Tooltip>
    );
  }

  if (rowData.result_ht_correct_score_casa === 'Oth') {
    return (
      <Tooltip title={<TooltipTitle row={rowData} />}>
        <StyledTableCellYellow align="center">
          {rowData.result_ft_casa + 'x' + rowData.result_ft_visitante}
        </StyledTableCellYellow>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={<TooltipTitle row={rowData} />}>
      <StyledTableCellGreen align="center">
        {rowData.result_ft_casa + 'x' + rowData.result_ft_visitante}
      </StyledTableCellGreen>
    </Tooltip>
  );
}
