import CursoItem from '../../components/CursoItems'
import Link from 'next/link'
import { getCursos } from './actions'


export default async function CursosPage() {
  const cursos = await getCursos()
  

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .page {
          min-height: 100vh;
          width: 100%;
          background: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          padding: 40px 16px;
        }
        

        .nav {
          width: 100%;
          height: 64px;
          background: #111;
          border-bottom: 1px solid #1f1f1f;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          font-size: 14px;
          font-weight: 500;
          color: #888;
          text-decoration: none;
          transition: color 0.15s;
        }

        .nav-links a:hover {
          color: #fff;
        }

        .nav-logo {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .nav-logo span {
          color: #16a34a;
        }
        
        .btn-login {
          padding: 8px 20px;
          background: transparent;
          border: 1.5px solid #222;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #888;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
        }

        .title {
          font-size: 28px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 32px;
        }

        .card {
          background: #111;
          border: 1px solid #222;
          border-radius: 12px;
          width: 100%;
          max-width: 480px;
          overflow: hidden;
        }

        .card-header {
          padding: 16px 20px;
          border-bottom: 1px solid #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-header span {
          font-size: 13px;
          color: #555;
        }

        .card-header strong {
          font-size: 13px;
          color: #16a34a;
          font-weight: 500;
        }

        .list {
          list-style: none;
          overflow-y: auto;
          max-height: 400px;
        }

        .list::-webkit-scrollbar {
          width: 4px;
        }

        .list::-webkit-scrollbar-track {
          background: #111;
        }

        .list::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 4px;
        }

        .list li + li {
          border-top: 1px solid #1a1a1a;
        }

        .btn-add {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 24px;
          background: #16a34a;
          color: #fff;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.15s;
        }

        .btn-add:hover {
          background: #15803d;
        }
      `}</style>

      <nav className="nav">
        <div className="nav-logo">curso<span>.</span>app</div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/alunos">Alunos</Link>
          <Link href="/cursos">Cursos</Link>
        </div>
        <Link className="btn-login" href='/login'>
          Entrar
        </Link>
      </nav>
      <div className="page">
        <h1 className="title">Lista de Cursos</h1>

        <div className="card">
          <div className="card-header">
            <span>Cursos disponíveis</span>
            <strong>{cursos.length} total</strong>
          </div>
          <ul className="list">
            {cursos.map((curso) => (
              <CursoItem id={curso.id} nome={curso.nome} key={curso.id} />
            ))}
          </ul>
        </div>

        <Link href="/curso/cadastro" className="btn-add">
          + Cadastrar Curso
        </Link>
      </div>
    </>
  )
}