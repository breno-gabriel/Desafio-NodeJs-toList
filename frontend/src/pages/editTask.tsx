import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type ErrorMessages = Record<string, string>;

function UpdateTask() {
  const { taskId } = useParams<{ taskId: string }>(); // Captura o taskId da URL
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('Baixa');
  const [errors, setErrors] = useState<ErrorMessages>({});

  useEffect(() => {
    if (taskId) {
      fetchTaskData(taskId);
    }
  }, [taskId]);

  const fetchTaskData = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/getTask/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar a tarefa');
      }
      const task = await response.json();
      setNome(task.nome);
      setDescricao(task.descricao);
      setPrioridade(task.prioridade);
    } catch (error) {
      console.error('Failed to fetch task:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const updatedTask = {
      nome,
      descricao,
      prioridade,
      finalizada: 0, 
      data_termino: null, 
      id_membro: '1' 
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
        const errorData = await response.json();
        const newErrors: ErrorMessages = {};

        if (errorData.errors) {
          errorData.errors.forEach((error: { field: string; message: string }) => {
            newErrors[error.field] = error.message;
          });
        }

        setErrors(newErrors);
        throw new Error('Erro ao atualizar a tarefa');
      }

      console.log('Tarefa atualizada com sucesso');
      // Reset form after successful submission
      setNome('');
      setDescricao('');
      setPrioridade('Baixa');
      setErrors({});
      navigate('/task-list'); // Navegar para a lista de tarefas ou outra página
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  return (
    <div className="py-20 px-14">
      <h1 className="text-2xl font-bold mb-4 text-white">Atualizar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-white">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border ${errors.nome ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
            required
          />
          {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="descricao" className="block text-white">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border ${errors.descricao ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
            required
          />
          {errors.descricao && <p className="text-red-500 text-sm">{errors.descricao}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="prioridade" className="block text-white">Prioridade:</label>
          <select
            id="prioridade"
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border ${errors.prioridade ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
            required
          >
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
          {errors.prioridade && <p className="text-red-500 text-sm">{errors.prioridade}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Atualizar</button>
      </form>
    </div>
  );
}

export default UpdateTask;
