"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface Props {
  onSend: (email: string, password: string) => Promise<void | string>
}

export default function LoginForm({ onSend }: Props) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit() {
    const response = await onSend(email, password)
    if (response) {
      alert(response)
      return
    }
    router.push("/")
  }

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
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          padding: 40px 16px;
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
          color: #ca8a04;
          font-weight: 500;
        }

        .card-body {
          padding: 32px 32px 40px;
        }

        .card-body h1 {
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .card-body p {
          font-size: 14px;
          color: #555;
          margin-bottom: 32px;
        }

        .fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .field label {
          display: block;
          font-size: 13px;
          font-weight: 500;
          color: #888;
          margin-bottom: 6px;
        }

        .field input {
          width: 100%;
          padding: 10px 14px;
          background: #000;
          border: 1.5px solid #222;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #fff;
          outline: none;
          transition: border-color 0.15s;
        }

        .field input::placeholder {
          color: #333;
        }

        .field input:focus {
          border-color: #ca8a04;
        }

        .btn-submit {
          width: 100%;
          padding: 11px;
          background: #ca8a04;
          border: none;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #000;
          cursor: pointer;
          transition: background 0.15s;
        }

        .btn-submit:hover {
          background: #a16207;
        }

        .btn-submit:active {
          background: #854d0e;
        }
      `}</style>

      <div className="page">
        <div className="card">
          <div className="card-header">
            <span>Acesso à plataforma</span>
            <strong>curso.app</strong>
          </div>

          <div className="card-body">
            <h1>Login</h1>
            <p>Entre com suas credenciais para continuar</p>

            <div className="fields">
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field">
                <label>Senha</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button className="btn-submit" onClick={handleSubmit}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}