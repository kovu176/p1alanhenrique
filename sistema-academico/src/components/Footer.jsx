export default function Footer() {
    const anoAtual = new Date().getFullYear();
    return (
      <footer style={{ marginTop: '2rem', borderTop: '1px solid #ccc', padding: '1rem', textAlign: 'center' }}>
        <p>Desenvolvido por: [Alan Henrique Barbosa do Alto] - {anoAtual}</p>
      </footer>
    );
  }