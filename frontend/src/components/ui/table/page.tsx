import { Task, columns } from "./columns"
import { DataTable } from "./data-table"

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
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
