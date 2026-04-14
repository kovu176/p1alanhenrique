import { useState, useEffect } from 'react';
import StatusBar from './components/StatusBar';
import Footer from './components/Footer';

function App() {
  // Estado para a lista de alunos
  const [alunos, setAlunos] = useState([
    { nome: 'Ana Silva', curso: 'Ciência da Computação' }
  ]);

  // Estados para os campos do formulário (Edição/Criação)
  const [nomeInput, setNomeInput] = useState('');
  const [cursoInput, setCursoInput] = useState('Engenharia de Software');

  // useEffect: Requisito de exibir mensagem ao carregar
  useEffect(() => {
    console.log("Sistema Acadêmico carregado e pronto para uso.");
  }, []);

  // Função para adicionar aluno usando os dados dos inputs
  const adicionarAluno = () => {
    if (nomeInput.trim() === '') {
      alert("Por favor, digite o nome do aluno.");
      return;
    }

    const novoAluno = { 
      nome: nomeInput, 
      curso: cursoInput 
    };

    setAlunos([...alunos, novoAluno]);
    
    // Limpar o campo de nome após adicionar
    setNomeInput('');
  };

  return (
    <div>
      <StatusBar mensagem="Gerenciamento de Alunos" />

      <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" 
          alt="Educação" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
        />

        <section style={{ background: '#eee', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <h3>Cadastrar / Editar Aluno</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Campo para editar/digitar o nome */}
            <input 
              type="text" 
              placeholder="Nome do aluno" 
              value={nomeInput}
              onChange={(e) => setNomeInput(e.target.value)}
              style={{ padding: '8px' }}
            />

            {/* Combolist com os 3 cursos específicos */}
            <select 
              value={cursoInput} 
              onChange={(e) => setCursoInput(e.target.value)}
              style={{ padding: '8px' }}
            >
              <option value="Engenharia de Software">Engenharia de Software</option>
              <option value="Ciência da Computação">Ciência da Computação</option>
              <option value="Matemática Computacional">Matemática Computacional</option>
            </select>

            <button onClick={adicionarAluno} style={{ padding: '10px', background: '#27ae60', color: 'white', border: 'none', cursor: 'pointer' }}>
              Confirmar e Adicionar
            </button>
          </div>
        </section>

        <h2>Alunos Matriculados</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {alunos.map((aluno, index) => (
            <li key={index} style={{ background: '#fff', border: '1px solid #ddd', margin: '5px 0', padding: '10px', borderRadius: '4px' }}>
              <strong>{aluno.nome}</strong> — {aluno.curso}
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default App;