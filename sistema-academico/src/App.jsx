import { useState, useEffect } from 'react';
import StatusBar from './components/StatusBar';
import Footer from './components/Footer';

function App() {
  // useState: Estado para armazenar a lista de alunos
  const [alunos, setAlunos] = useState([
    { nome: 'Ana Silva', curso: 'Sistemas de Informação' },
    { nome: 'João Souza', curso: 'Ciência da Computação' }
  ]);

  // useEffect: Exibir mensagem no console ao carregar
  useEffect(() => {
    console.log("Sistema Acadêmico carregado com sucesso!");
  }, []);

  // Interação: Função para adicionar um novo aluno (exemplo simples)
  const adicionarAluno = () => {
    const novoAluno = { nome: 'Novo Aluno', curso: 'Engenharia de Software' };
    setAlunos([...alunos, novoAluno]);
  };

  return (
    <div>
      <StatusBar mensagem="Sistema de Gerenciamento Acadêmico" />

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        {/* Imagem relacionada à educação */}
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" 
          alt="Educação" 
          style={{ borderRadius: '8px', marginBottom: '1rem' }}
        />

        <h2>Lista de Alunos</h2>
        
        {/* Interação: Botão para adicionar aluno */}
        <button onClick={adicionarAluno} style={{ marginBottom: '1rem', padding: '10px 20px', cursor: 'pointer' }}>
          Adicionar Aluno Exemplo
        </button>

        {/* map: Listar os alunos na tela */}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {alunos.map((aluno, index) => (
            <li key={index} style={{ background: '#f4f4f4', margin: '5px 0', padding: '10px', borderRadius: '4px' }}>
              <strong>{aluno.nome}</strong> - {aluno.curso}
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default App;