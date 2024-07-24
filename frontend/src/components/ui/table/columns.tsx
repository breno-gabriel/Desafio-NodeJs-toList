"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Task = {
  id: string;
  nome: string;
  descricao: string | null;
  finalizada: number;
  data_termino: string | null;
  prioridade: string;
  id_membro: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
    cell: ({ row }) => {
      return <div>{row.getValue("nome")}</div>;
    }
  },
  {
    accessorKey: "finalizada",
    header: "Finalizada",
    cell: ({ row }) => {
      const finished = row.getValue("finalizada") === 0 ? "Ainda não" : "Finalizada";
      return <div>{finished}</div>;
    }
  },
  {
    accessorKey: "prioridade",
    header: "Prioridade",
    cell: ({ row }) => {
      return <div>{row.getValue("prioridade")}</div>;
    }
  },
  {
    accessorKey: "delete",
    header: "",
    cell: ({ row }) => {
      const taskId = row.original.id;

      const handleDelete = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/deleteTask/${taskId}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            throw new Error('Erro ao deletar a tarefa');
          }

          console.log("Tarefa deletada com sucesso");
        } catch (error) {
          console.error('Failed to delete task:', error);
        }
      };

      return <button onClick={handleDelete} className="bg-red-700">Deletar</button>;
    }
  },
  {
    accessorKey: "edit",
    header: "",
    cell: ({ row }) => {
      const taskId = row.original.id;

      const handleEdit = () => {
        console.log("Edit task with id:", taskId);
      };

      return <button onClick={handleEdit} className="bg-blue-800">Editar</button>;
    }
  },
  {
    accessorKey: "complete",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Checkbox />
          <p>Concluir tarefa</p>
        </div>
      );
    }
  }
];

