import React, { useEffect, useState } from 'react';
import { DataTable } from "@/components/ui/table/data-table";
import { Task, columns } from "../components/ui/table/columns";

async function getData(): Promise<Task[]> {
  try {
    const response = await fetch("http://localhost:3000/api/getAllTasks");

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: { message: string, results: Task[] } = await response.json();

    console

    return data.results;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return []; 
  }
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
