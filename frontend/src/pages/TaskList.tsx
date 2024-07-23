import React, { useEffect, useState } from 'react';
import { DataTable } from "@/components/ui/table/data-table";
import { Task, columns } from "../components/ui/table/columns";

async function getData(): Promise<Task[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      nome: "Estudar PLC",
      descricao: "Estudar pq nao quero reprovar",
      finalizada: 0,
      data_termino: null,
      prioridade: "Alta",
      id_membro: "2",
    },
    // ...
  ];
}

function TaskList() {
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-20 px-14'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default TaskList;
