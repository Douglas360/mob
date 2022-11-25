import { useEffect, useState } from 'react';
import { Filtros } from '../../components/DashboardComponents';
import { Header } from '../../components/LayoutComponents/Header';
import { FilterForm } from '../../components/DashboardComponents/FilterForm';
import { Table } from '../../components/DashboardComponents/Table';
import { api } from '../../services/api';

export function Dashboard() {
  const [fields, setFields] = useState({
    ligaSwitchChecked: 'euro',
    partidas: 24,
    mercados: 'AMS',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const fetchApiData = async liga => {
    setIsLoading(true);

    try {
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
      ]);

      setTableData(
        responses.map(response =>
          response.data.sort((a, b) =>
            new Date(a.dt_atualizacao) > new Date(b.dt_atualizacao) ? 1 : -1,
          ),
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (fields.ligaSwitchChecked !== '') {
      fetchApiData(fields.ligaSwitchChecked);
    }
  }, [fields.ligaSwitchChecked]);

  return (
    <div className="min-h-full ">
      <Header />
      <main>
        <div className="container mx-auto max-w-full p-2 flex-col md:flex-row text-white">
          <FilterForm fields={fields} setFields={setFields} />

          <Table
            items={tableData}
            isLoading={isLoading}
            liga={fields.ligaSwitchChecked}
            mercados={fields.mercados}
          />

          {fields.ligaSwitchChecked === 'euro-cup' && <Filtros liga="euro" />}
          {fields.ligaSwitchChecked === 'copa' && <Filtros liga="copa" />}
          {fields.ligaSwitchChecked === 'premier' && <Filtros liga="premier" />}
          {fields.ligaSwitchChecked === 'super' && <Filtros liga="super" />}
        </div>
      </main>
    </div>
  );
}
