"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Task = {
  id: string
  nome: string
  descricao: string|null
  finalizada: number
  data_termino: string|null 
  prioridade: string  
  id_membro: string 
}

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "nome",
    header: "nome",
    cell: ({row}) => {

        return <div >{row.getValue("nome")}</div>

    }
  },
  {
    accessorKey: "finalizada",
    header: "finalizada",
    cell: ({row}) => {

      // console.log(row.getValue("finalizada"))

      const finished = row.getValue("finalizada") === 0 ? "Ainda não" : "Finalizada";
  
      return <div>{finished}</div>; 

  },
  },
  {
    accessorKey: "prioridade",
    header: "prioridade",
    cell: ({row}) => {

      return <div >{row.getValue("prioridade")}</div>

  }
  },
  
  {
    accessorKey: "prioridade",
    header: "",
    cell: ({row}) => {

      return <button className="bg-red-700">deletar</button>

  }
  },

  {
    accessorKey: "prioridade",
    header: "",
    cell: ({row}) => {

      return <button className="bg-blue-800">editar</button>

  }
  }, 

  {
    accessorKey: "prioridade",
    header: "",
    cell: ({row}) => {

      return <div className="flex gap-2">
        <Checkbox />
        <p>Concluir tarefa</p>
      </div>


  }
  }

]
