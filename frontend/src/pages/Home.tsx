import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-white text-4xl font-bold mb-4">Listify</h1>
            <h3 className="text-white text-xl mb-6">Keep calm and just do it</h3>
            <div className="space-x-4">
                <Button onClick={() => navigate('/task-list')} className="bg-white rounded-lg">Listagem de tarefas</Button>
                <Button onClick={() => navigate('/member-registration')} className="bg-white rounded-lg">Cadastro de membros</Button>
            </div>
        </div>
    );
}

export default Home;
