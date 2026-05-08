"use client"

import { SubmitEvent, useState } from "react"
import { createAluno } from "./actions"
import { useRouter } from "next/navigation"

export default function AlunoCadastroPage() {
  const router = useRouter()
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")

  function formatCpf(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11)
    if (digits.length > 9) return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    if (digits.length > 6) return digits.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3")
    if (digits.length > 3) return digits.replace(/(\d{3})(\d{0,3})/, "$1.$2")
    return digits
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    const response = await createAluno({
        name: nome,
        email,
        idade:Number(idade),
        cpf:Number(cpf.replaceAll(/\D/g, ''))

    })

    if (!response) {
        setNome("")
        setIdade("")
        setCpf("")
        setEmail("")
        router.push("/alunos")
        return;
    }
    alert(response)
  }

  return (
      <div style={{
        minHeight: "100vh",
        background: "#0e0e10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {/* Google Fonts */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

          .cadastro-input {
            background: #09090b;
            border: 0.5px solid rgba(255,255,255,0.1);
            border-radius: 10px;
            padding: 11px 14px;
            font-size: 14px;
            font-family: 'DM Sans', sans-serif;
            color: #f4f4f5;
            width: 100%;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .cadastro-input::placeholder { color: #3f3f46; }
          .cadastro-input:focus {
            border-color: rgba(94,207,145,0.5);
            box-shadow: 0 0 0 3px rgba(94,207,145,0.08);
          }

          .cadastro-btn {
            width: 100%;
            padding: 13px;
            background: #5ECF91;
            color: #0e0e10;
            font-family: 'DM Sans', sans-serif;
            font-size: 14px;
            font-weight: 500;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: opacity 0.2s, transform 0.15s;
          }
          .cadastro-btn:hover { opacity: 0.9; }
          .cadastro-btn:active { transform: scale(0.98); }
        `}</style>

        <div style={{
          width: "100%",
          maxWidth: 420,
          background: "#18181b",
          border: "0.5px solid rgba(255,255,255,0.1)",
          borderRadius: 20,
          padding: "2.5rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Glow decorativo */}
          <div style={{
            position: "absolute",
            top: -80, right: -80,
            width: 220, height: 220,
            background: "radial-gradient(circle, rgba(94,207,145,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Badge */}
          <span style={{
            display: "inline-block",
            background: "rgba(94,207,145,0.12)",
            color: "#5ECF91",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: 999,
            border: "0.5px solid rgba(94,207,145,0.3)",
            marginBottom: "1rem",
          }}>
            novo aluno
          </span>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 28,
            fontWeight: 400,
            color: "#f4f4f5",
            margin: "0 0 0.25rem",
            lineHeight: 1.2,
          }}>
            Cadastrar aluno
          </h1>

          <p style={{ fontSize: 13, color: "#71717a", margin: "0 0 2rem" }}>
            Preencha os dados para criar o perfil
          </p>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: "1.5rem" }}>
            {/* Nome */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#71717a" }}>
                Nome completo
              </label>
              <input
                className="cadastro-input"
                type="text"
                placeholder="Ex: João da Silva"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            {/* Idade + CPF */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#71717a" }}>
                  Idade
                </label>
                <input
                  className="cadastro-input"
                  type="number"
                  placeholder="Ex: 20"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#71717a" }}>
                  CPF
                </label>
                <input
                  className="cadastro-input"
                  type="text"
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={(e) => setCpf(formatCpf(e.target.value))}
                  maxLength={14}
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#71717a" }}>
                E-mail
              </label>
              <input
                className="cadastro-input"
                type="email"
                placeholder="joao@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button className="cadastro-btn" type="submit">
            Cadastrar aluno
          </button>
        </form>
          <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "1.5rem 0" }} />

          <p style={{ textAlign: "center", fontSize: 12, color: "#3f3f46", margin: 0 }}>
            Já tem cadastro?{" "}
            <span style={{ color: "#5ECF91", cursor: "pointer" }}>Fazer login</span>
          </p>
        </div>
      </div>

  )
}
