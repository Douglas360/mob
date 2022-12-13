import {
  Table as MUITable,
  TableBody,
  TableHead,
  TableRow,
} from '@mui/material';
import { HourglassMedium, SmileySad } from 'phosphor-react';
import { tableColumns } from './tableColumns';

import { Tooltip } from '../../Tooltip';
import { TableCell } from './TableCell';
import { TooltipTitleBetfair } from '../TooltipTitleBetfair';
import { TotalPercentage } from './TotalPercentage';

export function TableBetfair({ items, liga, mercados, partidas }) {
  const ligaLabels = {
    euro: 'Euro Cup',
    copa: 'Copa do Mundo',
    premier: 'Premier',
    seriea: 'Super Liga',
    champions: 'Champions'
  };

  const itemsByPartidas = partidas === 24 ? items : items.slice(0, partidas);

  return (
    <>
      <TotalPercentage items={itemsByPartidas} liga={ligaLabels[liga]} />

      <div className="mt-4 max-w-full rounded overflow-x-auto">
        <MUITable className="max-w-full" size="small">
          <TableHead>
            <TableRow>
              {tableColumns[liga].map(row => (
                <th
                  key={row.id}
                  align="center"
                  className="bg-slate-800 text-white p-1 border border-solid border-black font-medium"
                >
                  {row.value}
                </th>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {itemsByPartidas &&
              itemsByPartidas.length > 0 &&
              itemsByPartidas.map((item, rowIndex) => {
                const minuto = item.items[0]?.minuto_jogo?.split(':')[0]; //Formatação para apresentar na coluna Hora
                //const minuto = item.items[0]?.minuto_jogo
                if (!minuto) return null;

                // Ordena os items das linhas da tabela referente ao minuto jogo
                const rowItems = item.items.sort((a, b) =>
                  a.minuto_jogo > b.minuto_jogo ? 1 : -1,
                );

                const totalRed = rowItems.reduce(
                  (prev, curr) =>
                    prev + Number(curr.background === 'red' ? 1 : 0),
                  0,
                );
                const totalGreen = rowItems.reduce(
                  (prev, curr) =>
                    prev + Number(curr.background === 'green' ? 1 : 0),
                  0,
                );

                const total = totalRed + totalGreen;

                const percentage =
                  total === 0
                    ? 0
                    : Number((totalGreen / total) * 100).toFixed(0);

                return (
                  <TableRow key={`table-row-${rowIndex}`}>
                    <td className="bg-slate-800 text-white border border-solid border-black font-medium">
                      {minuto.length < 4 ? minuto.padStart(2, '0') : minuto}
                    </td>

                    {rowItems.map((rowData, index) => {
                      if (rowData?.isEmpty) {
                        return (
                          <Tooltip
                            key={index}
                            title={<TooltipTitleBetfair row={rowData} />}
                          >
                            <TableCell background={rowData.background}>
                              {rowData?.isPending ? (
                                <HourglassMedium
                                  className="mx-auto"
                                  size={20}
                                />
                              ) : (
                                <SmileySad className="mx-auto" size={20} />
                              )}
                            </TableCell>
                          </Tooltip>
                        );
                      }

                      return (
                        <Tooltip
                          key={index}
                          title={<TooltipTitleBetfair row={rowData} />}
                        >
                          <TableCell background={rowData.background}>
                            {rowData.result_ft_casa?.includes('undefined')
                              ? '-'
                              : rowData.result_ft_casa + " - " + rowData.result_ft_visitante}
                          </TableCell>
                        </Tooltip>
                      );
                    })}

                    <td
                      className={`${percentage >= 50 ? 'text-green-500' : 'text-white'
                        } bg-slate-800 border border-solid border-black font-medium`}
                    >
                      {percentage}%
                    </td>
                  </TableRow>
                );
              })}
          </TableBody>
        </MUITable>
      </div>
    </>
  );
}
