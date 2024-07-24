import React, { useEffect, useState } from 'react';
import { DataTable } from "@/components/ui/table/data-table";
import { Task, columns } from "../components/ui/table/columns";
import { Button } from '@/components/ui/button';

async function getData(): Promise<Task[]> {
  try {
    const response = await fetch("http://localhost:3000/api/getAllTasks");

    if (!response.ok) {
      throw new Error('Falha na conexão');
    }

    const data: { message: string, results: Task[] } = await response.json();

    return data.results;

  } catch (error) {
    console.error('Falha ao buscar os dados:', error);
    return []; 
  }
}

function TaskList() {
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      // console.log(result)
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='py-20 px-14 flex flex-col gap-56'>
      <DataTable columns={columns} data={data} />
      <div className='flex justify-end'>
        <Button className="bg-white w-auto">Cadastrar tarefa</Button>
      </div>
    </div>
  );
}

export default TaskList;
