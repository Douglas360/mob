import { useEffect, useState } from 'react';

import { Header } from '../../components/LayoutComponents/Header';
import { Table } from '../../components/DashboardComponents/Table/Table';
import { FilterForm } from '../../components/DashboardComponents/FilterForm';
import { sortItemsByMinutoJogo } from '../../functions/sortItemsByMinutoJogo';

import { api } from '../../services/api';

export function Dashboard() {
  const [fields, setFields] = useState({
    ligaSwitchChecked: 'euro',
    partidas: 24,
    mercados: 'AMS',
  });
  const [fetchTimer, setFetchTimer] = useState(0);
  const [tableData, setTableData] = useState([]);

  const fetchApiData = async liga => {
    const responses = await Promise.all([
      api.get(`/result/${liga}/23`),
      api.get(`/result/${liga}/22`),
      api.get(`/result/${liga}/21`),
      api.get(`/result/${liga}/20`),
      api.get(`/result/${liga}/19`),
      api.get(`/result/${liga}/18`),
      api.get(`/result/${liga}/17`),
      api.get(`/result/${liga}/16`),
      api.get(`/result/${liga}/15`),
      api.get(`/result/${liga}/14`),
      api.get(`/result/${liga}/13`),
      api.get(`/result/${liga}/12`),
      api.get(`/result/${liga}/11`),
      api.get(`/result/${liga}/10`),
      api.get(`/result/${liga}/9`),
      api.get(`/result/${liga}/8`),
      api.get(`/result/${liga}/7`),
      api.get(`/result/${liga}/6`),
      api.get(`/result/${liga}/5`),
      api.get(`/result/${liga}/4`),
      api.get(`/result/${liga}/3`),
      api.get(`/result/${liga}/2`),
      api.get(`/result/${liga}/1`),
      api.get(`/result/${liga}/0`),
    ]);

    const responseItems = responses.map(response => response.data);

    const sortedItemsByMinutoJogo = sortItemsByMinutoJogo(responseItems);

    setTableData(sortedItemsByMinutoJogo);
  };

  // Executa a cada 1min
  useEffect(() => {
    const timer = setTimeout(() => {
      setFetchTimer(prevDelay => prevDelay + 1);
      fetchApiData(fields.ligaSwitchChecked);
    }, 60000);

    return () => clearTimeout(timer);
  }, [fetchTimer, fields.ligaSwitchChecked]);

  // Executa ao alterar a liga
  useEffect(() => {
    if (fields.ligaSwitchChecked !== '') {
      fetchApiData(fields.ligaSwitchChecked);
    }
  }, [fields.ligaSwitchChecked]);

  return (
    <div className="min-h-full ">
      <Header />
      <main>
        <div className="flex flex-col max-w-full p-4 gap-4 text-white">
          <FilterForm fields={fields} setFields={setFields} />

          <Table
            items={tableData}
            liga={fields.ligaSwitchChecked}
            mercados={fields.mercados}
            partidas={fields.partidas}
          />
        </div>
      </main>
    </div>
  );
}
