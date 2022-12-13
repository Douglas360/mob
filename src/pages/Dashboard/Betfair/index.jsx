import { useState } from 'react';

import { useMultipleRequests } from '../../../hooks/useMultipleRequests';
import { formatTableDataBetfair } from '../../../functions/formatTableDataBetfair';

import { Loading } from '../../../components/Loading';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { Header } from '../../../components/LayoutComponents/Header';
import { TableBetfair } from '../../../components/DashboardComponents/Table/TableBetfair';
import { FilterFormBetfair } from '../../../components/DashboardComponents/FilterFormBetfair';
import { CopyrightDashboard } from '../../../components/LayoutComponents/CopyrightDashboard';

export function Betfair() {
  const [fields, setFields] = useState({
    liga: 'euro',
    partidas: 24,
    mercados: 'ambas-marcam-sim',
  });

  const { data, error, isError, isLoading } = useMultipleRequests(
    [
      `/result/betfair/${fields.liga}/23`,
      `/result/betfair/${fields.liga}/22`,
      `/result/betfair/${fields.liga}/21`,
      `/result/betfair/${fields.liga}/20`,
      `/result/betfair/${fields.liga}/19`,
      `/result/betfair/${fields.liga}/18`,
      `/result/betfair/${fields.liga}/17`,
      `/result/betfair/${fields.liga}/16`,
      `/result/betfair/${fields.liga}/15`,
      `/result/betfair/${fields.liga}/14`,
      `/result/betfair/${fields.liga}/13`,
      `/result/betfair/${fields.liga}/12`,
      `/result/betfair/${fields.liga}/11`,
      `/result/betfair/${fields.liga}/10`,
      `/result/betfair/${fields.liga}/09`,
      `/result/betfair/${fields.liga}/08`,
      `/result/betfair/${fields.liga}/07`,
      `/result/betfair/${fields.liga}/06`,
      `/result/betfair/${fields.liga}/05`,
      `/result/betfair/${fields.liga}/04`,
      `/result/betfair/${fields.liga}/03`,
      `/result/betfair/${fields.liga}/02`,
      `/result/betfair/${fields.liga}/01`,
      `/result/betfair/${fields.liga}/00`,
    ],
    { refreshInterval: 5000 },
  );

  return (
    <div className="min-h-full ">
      <Header />
      <main className="max-w-7xl mr-auto ml-auto">
        <div className="flex flex-col  p-4 gap-4 text-white ">
          <FilterFormBetfair fields={fields} setFields={setFields} />

          <div className="min-h-auto max-h-full max-w-full bg-dark-pn rounded-md pt-2 pl-10 pr-10 pb-3 text-center shadow-lg shadow-cyan-900">
            {isLoading ? (
              <Loading className="mt-4" />
            ) : (
              <>
                {isError ? (
                  <ErrorMessage className="mt-4" error={error} />
                ) : (
                  <TableBetfair
                    items={formatTableDataBetfair(data, fields.mercados, fields.liga)}
                    liga={fields.liga}
                    mercados={fields.mercados}
                    partidas={fields.partidas}
                  />
                )}
              </>
            )}
            <CopyrightDashboard />
          </div>
        </div>
      </main>
    </div>
  );
}
