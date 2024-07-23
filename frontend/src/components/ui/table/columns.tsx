"use client"

import { ColumnDef } from "@tanstack/react-table"

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
    accessorKey: "descricao",
    header: "descricao",
    cell: ({row}) => {

      return <div >{row.getValue("descricao")}</div>

  }
  },
  {
    accessorKey: "prioridade",
    header: "prioridade",
    cell: ({row}) => {

      return <div >{row.getValue("prioridade")}</div>

  }
  },
]
