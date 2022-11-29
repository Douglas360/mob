import { useState } from 'react';

import { useMultipleRequests } from '../../hooks/useMultipleRequests';
import { sortItemsByMinutoJogo } from '../../functions/sortItemsByMinutoJogo';

import { Loading } from '../../components/Loading';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Header } from '../../components/LayoutComponents/Header';
import { Table } from '../../components/DashboardComponents/Table/Table';
import { FilterForm } from '../../components/DashboardComponents/FilterForm';

export function Dashboard() {
  const [fields, setFields] = useState({
    liga: 'euro',
    partidas: 24,
    mercados: 'AMS',
  });

  const { data, error, isError, isLoading } = useMultipleRequests([
    `/result/${fields.liga}/23`,
    `/result/${fields.liga}/22`,
    `/result/${fields.liga}/21`,
    `/result/${fields.liga}/20`,
    `/result/${fields.liga}/19`,
    `/result/${fields.liga}/18`,
    `/result/${fields.liga}/17`,
    `/result/${fields.liga}/16`,
    `/result/${fields.liga}/15`,
    `/result/${fields.liga}/14`,
    `/result/${fields.liga}/13`,
    `/result/${fields.liga}/12`,
    `/result/${fields.liga}/11`,
    `/result/${fields.liga}/10`,
    `/result/${fields.liga}/9`,
    `/result/${fields.liga}/8`,
    `/result/${fields.liga}/7`,
    `/result/${fields.liga}/6`,
    `/result/${fields.liga}/5`,
    `/result/${fields.liga}/4`,
    `/result/${fields.liga}/3`,
    `/result/${fields.liga}/2.`,
    `/result/${fields.liga}/1.`,
    `/result/${fields.liga}/0`,
  ]);

  return (
    <div className="min-h-full">
      <Header />
      <main>
        <div className="flex flex-col max-w-full p-4 gap-4 text-white">
          <FilterForm fields={fields} setFields={setFields} />

          <div className="min-h-screen max-h-full max-w-full bg-dark-pn rounded-md p-2 text-center">
            {isLoading ? (
              <Loading className="mt-4" />
            ) : (
              <>
                {isError ? (
                  <ErrorMessage className="mt-4" error={error} />
                ) : (
                  <Table
                    items={sortItemsByMinutoJogo(data)}
                    liga={fields.liga}
                    mercados={fields.mercados}
                    partidas={fields.partidas}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
