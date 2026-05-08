"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #000;
          font-family: 'Inter', sans-serif;
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

        .btn-login:hover {
          border-color: #16a34a;
          color: #fff;
        }

        .main {
          min-height: calc(100vh - 64px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #000;
          text-align: center;
          padding: 40px 16px;
        }

        .badge {
          display: inline-block;
          padding: 4px 12px;
          border: 1px solid #16a34a33;
          border-radius: 100px;
          font-size: 12px;
          color: #16a34a;
          margin-bottom: 24px;
        }

        .main h1 {
          font-size: 48px;
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .main h1 span {
          color: #16a34a;
        }

        .main p {
          font-size: 16px;
          color: #555;
          max-width: 380px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .cta-group {
          display: flex;
          gap: 12px;
        }

        .btn-primary {
          padding: 11px 28px;
          background: #16a34a;
          border: none;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.15s;
        }

        .btn-primary:hover {
          background: #15803d;
        }

        .btn-secondary {
          padding: 11px 28px;
          background: transparent;
          border: 1.5px solid #222;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #888;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.15s, color 0.15s;
        }

        .btn-secondary:hover {
          border-color: #444;
          color: #fff;
        }
      `}</style>

      <nav className="nav">
        <div className="nav-logo">curso<span>.</span>app</div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/alunos">Alunos</Link>
          <Link href="/cursos">Cursos</Link>
        </div>
        <button className="btn-login" onClick={() => router.push("/login")}>
          Entrar
        </button>
      </nav>

      <main className="main">
        <div className="badge">Plataforma de Cursos</div>
        <h1>Gerencie seus<br /><span>cursos e alunos</span></h1>
        <p>Organize turmas, professores e conteúdos em um só lugar.</p>
        <div className="cta-group">
          <Link href="/cursos" className="btn-primary">Ver Cursos</Link>
          <Link href="/alunos" className="btn-secondary">Ver Alunos</Link>
        </div>
      </main>
    </>
  )
}