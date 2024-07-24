"use client"

import { ColumnDef } from "@tanstack/react-table";
import {  useNavigate } from 'react-router-dom';
// import { Checkbox } from "@/components/ui/checkbox";
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
      const navigate = useNavigate();

      return <button onClick={() => navigate('/editTask/:taskId')} className="bg-blue-800">Editar</button>;
    }
  },
  {
    accessorKey: "complete",
    header: "",
    cell: ({ row }) => {
      const taskId = row.original.id;
      const isCompleted = row.original.finalizada === 1;

      const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        
        const updatedTask = {
          ...row.original,
          finalizada: isChecked ? 1 : 0,
        };

        try {
          const response = await fetch(`http://localhost:3000/api/updateTask/${taskId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
          });

          if (!response.ok) {
            throw new Error('Erro ao atualizar a tarefa');
          }

          console.log("Tarefa atualizada com sucesso");
        } catch (error) {
          console.error('Failed to update task:', error);
        }
      };

      return (
        <div className="flex gap-2">
          <input type="checkbox" checked={isCompleted} onChange={handleCheckboxChange} />
          <p>Concluir tarefa</p>
        </div>
      );
    }
  }
];
