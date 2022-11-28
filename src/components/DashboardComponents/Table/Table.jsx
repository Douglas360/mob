import {
  Table as MUITable,
  TableBody,
  TableHead,
  TableRow,
} from '@mui/material';
import { tableColumns } from './tableColumns';
import { sortItemsByPartidas } from '../../../functions/sortItemsByPartidas';

import { Over } from './TableRows/Over';
import { Under } from './TableRows/Under';
import { EmpateHT } from './TableRows/EmpateHT';
import { CasaMarca } from './TableRows/CasaMarca';
import { ForaMarca } from './TableRows/ForaMarca';
import { AmbasMarcamNao } from './TableRows/AmbasMarcamNao';
import { AmbasMarcamSim } from './TableRows/AmbasMarcamSim';

export function Table({ items, liga, mercados, partidas }) {
  const ligaLabels = {
    euro: 'Euro Cup',
    copa: 'Copa do Mundo',
    premier: 'Premier',
    super: 'Super Liga',
  };

  const sortedItemsByPartidas =
    items && items.length > 0 && sortItemsByPartidas(items, partidas);

  return (
    <>
      <div className="flex gap-1 justify-center">
        <span className="bg-red-600 rounded-lg p-0.5 mx-1 shadow-lg">50%</span>
        <p className="text-lg">{ligaLabels[liga]}</p>
        <span className="bg-green-600 rounded-lg p-0.5 mx-1">50%</span>
      </div>

      <div className="mt-4 max-w-full rounded overflow-x-auto">
        <MUITable className="max-w-full" size="small">
          <TableHead>
            <TableRow>
              {tableColumns[liga].map(row => (
                <th
                  key={row.id}
                  align="center"
                  className="bg-slate-800 text-white border border-solid border-black font-medium"
                >
                  {row.value}
                </th>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedItemsByPartidas &&
              sortedItemsByPartidas.length > 0 &&
              sortedItemsByPartidas.map((item, rowIndex) => {
                const minuto = item[0]?.minuto_jogo?.split('.')[0];

                // Ordena os items das linhas da tabela referente ao minuto jogo
                const rowItems = item.sort((a, b) =>
                  a.minuto_jogo > b.minuto_jogo ? 1 : -1,
                );

                return (
                  <TableRow key={`table-row-${rowIndex}`}>
                    <td className="bg-slate-800 text-white border border-solid border-black font-medium">
                      {minuto.length < 4 ? minuto.padStart(2, '0') : minuto}
                    </td>

                    {mercados === 'AMS' &&
                      rowItems.map((rowData, index) => (
                        <AmbasMarcamSim
                          key={`row-data-${index}`}
                          rowData={rowData}
                        />
                      ))}

                    {mercados === 'AMN' &&
                      rowItems.map((rowData, index) => (
                        <AmbasMarcamNao
                          key={`row-data-${index}`}
                          rowData={rowData}
                        />
                      ))}

                    {mercados === 'O05' &&
                      rowItems.map((rowData, index) => (
                        <Over
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={0.5}
                        />
                      ))}

                    {mercados === 'O15' &&
                      rowItems.map((rowData, index) => (
                        <Over
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={1.5}
                        />
                      ))}

                    {mercados === 'O25' &&
                      rowItems.map((rowData, index) => (
                        <Over
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={2.5}
                        />
                      ))}

                    {mercados === 'O35' &&
                      rowItems.map((rowData, index) => (
                        <Over
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={3.5}
                        />
                      ))}

                    {mercados === 'U05' &&
                      rowItems.map((rowData, index) => (
                        <Under
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={0.5}
                        />
                      ))}

                    {mercados === 'U15' &&
                      rowItems.map((rowData, index) => (
                        <Under
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={1.5}
                        />
                      ))}

                    {mercados === 'U25' &&
                      rowItems.map((rowData, index) => (
                        <Under
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={2.5}
                        />
                      ))}

                    {mercados === 'U35' &&
                      rowItems.map((rowData, index) => (
                        <Under
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={3.5}
                        />
                      ))}

                    {mercados === 'CM' &&
                      rowItems.map((rowData, index) => (
                        <CasaMarca
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={3.5}
                        />
                      ))}

                    {mercados === 'FM' &&
                      rowItems.map((rowData, index) => (
                        <ForaMarca
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={3.5}
                        />
                      ))}

                    {mercados === 'EHT' &&
                      rowItems.map((rowData, index) => (
                        <EmpateHT
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={3.5}
                        />
                      ))}

                    {mercados === 'EFT' &&
                      rowItems.map((rowData, index) => (
                        <AmbasMarcamSim
                          key={`row-data-${index}`}
                          rowData={rowData}
                          op={3.5}
                        />
                      ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </MUITable>
      </div>
    </>
  );
}
