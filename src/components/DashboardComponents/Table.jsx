import {
  Paper,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { AmbasMarcamNao } from './TableRows/AmbasMarcamNao';
import { AmbasMarcamSim } from './TableRows/AmbasMarcamSim';
import { Over } from './TableRows/Over';
import { Under } from './TableRows/Under';
import { CasaMarca } from './TableRows/CasaMarca';
import { ForaMarca } from './TableRows/ForaMarca';
import { EmpateHT } from './TableRows/EmpateHT';

const columns = [
  { id: 1, value: 'Hora' },
  { id: 2, value: 2 },
  { id: 3, value: 5 },
  { id: 4, value: 8 },
  { id: 5, value: 11 },
  { id: 6, value: 14 },
  { id: 7, value: 17 },
  { id: 8, value: 20 },
  { id: 9, value: 23 },
  { id: 10, value: 26 },
  { id: 11, value: 29 },
  { id: 12, value: 32 },
  { id: 13, value: 35 },
  { id: 14, value: 38 },
  { id: 15, value: 41 },
  { id: 16, value: 44 },
  { id: 17, value: 47 },
  { id: 18, value: 50 },
  { id: 19, value: 53 },
  { id: 20, value: 56 },
  { id: 21, value: 59 },
];

export function Table({ items, isLoading, liga, mercados }) {
  const ligaLabels = {
    euro: 'Euro Cup',
    copa: 'Copa do Mundo',
    premier: 'Premier',
    super: 'Super Liga',
  };

  return (
    <div className="min-h-screen max-h-full max-w-full bg-dark-pn rounded-md m-2 p-2 text-center">
      <div className="flex gap-1 justify-center">
        <span className="bg-red-600 rounded-lg p-0.5 mx-1 shadow-lg">50%</span>
        <p className="text-lg">{ligaLabels[liga]}</p>
        <span className="bg-green-600 rounded-lg p-0.5 mx-1">50%</span>
      </div>

      <TableContainer className="mt-4 max-w-full" component={Paper}>
        <MUITable className="max-w-full" size="small">
          <TableHead className="rounded-lg p-0.5 mx-1 shadow-lg">
            <TableRow>
              {columns.map(row => (
                <TableCell key={row.id} align="center">
                  {row.value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {isLoading ? (
            <TableBody>
              <TableCell colSpan={20} align="center">
                <p className="font-bold">Carregando...</p>
              </TableCell>
            </TableBody>
          ) : (
            <TableBody>
              {items &&
                items.length > 0 &&
                items.map((item, rowIndex) => {
                  // console.log(`ITEM-${rowIndex}`, item);

                  return (
                    <TableRow
                      key={`table-row-${rowIndex}`}
                      style={{ width: 'full' }}
                    >
                      <TableCell align="center" className="bg-slate-300">
                        {item[0].minuto_jogo.split('.')[0]}
                      </TableCell>

                      {mercados === 'AMS' && (
                        <>
                          {item.map((rowData, index) => (
                            <AmbasMarcamSim
                              key={`row-data-${index}`}
                              rowData={rowData}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'AMN' && (
                        <>
                          {item.map((rowData, index) => (
                            <AmbasMarcamNao
                              key={`row-data-${index}`}
                              rowData={rowData}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'O05' && (
                        <>
                          {item.map((rowData, index) => (
                            <Over
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={0.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'O15' && (
                        <>
                          {item.map((rowData, index) => (
                            <Over
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={1.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'O25' && (
                        <>
                          {item.map((rowData, index) => (
                            <Over
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={2.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'O35' && (
                        <>
                          {item.map((rowData, index) => (
                            <Over
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={3.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'U05' && (
                        <>
                          {item.map((rowData, index) => (
                            <Under
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={0.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'U15' && (
                        <>
                          {item.map((rowData, index) => (
                            <Under
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={1.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'U25' && (
                        <>
                          {item.map((rowData, index) => (
                            <Under
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={2.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'U35' && (
                        <>
                          {item.map((rowData, index) => (
                            <Under
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={3.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'CM' && (
                        <>
                          {item.map((rowData, index) => (
                            <CasaMarca
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={3.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'FM' && (
                        <>
                          {item.map((rowData, index) => (
                            <ForaMarca
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={3.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'EHT' && (
                        <>
                          {item.map((rowData, index) => (
                            <EmpateHT
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={3.5}
                            />
                          ))}
                        </>
                      )}

                      {mercados === 'EFT' && (
                        <>
                          {item.map((rowData, index) => (
                            <AmbasMarcamSim
                              key={`row-data-${index}`}
                              rowData={rowData}
                              op={3.5}
                            />
                          ))}
                        </>
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          )}
        </MUITable>
      </TableContainer>
    </div>
  );
}
