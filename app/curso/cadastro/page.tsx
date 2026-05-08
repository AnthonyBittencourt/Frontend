
"use client"
 
import { SubmitEvent, useState } from "react"
import { createCurso } from "./actions"
import { useRouter } from "next/navigation"
 
export default function CursoCadastroPage() {
  const router = useRouter()
  const [nome, setNome] = useState("")
  const [professor, setProfessor] = useState("")
  const [cargaHoraria, setCargaHoraria] = useState("")
  const [descricao, setDescricao] = useState("")
 
  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    const response = await createCurso({
      nome,
      professor,
      cargaHoraria: Number(cargaHoraria),
      descricao,
    })
 
    if (!response) {
      setNome("")
      setProfessor("")
      setCargaHoraria("")
      setDescricao("")
      router.push("/cursos")
      return
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
          border-color: rgba(99,179,237,0.5);
          box-shadow: 0 0 0 3px rgba(99,179,237,0.08);
        }
 
        .cadastro-textarea {
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
          resize: vertical;
          min-height: 90px;
        }
        .cadastro-textarea::placeholder { color: #3f3f46; }
        .cadastro-textarea:focus {
          border-color: rgba(99,179,237,0.5);
          box-shadow: 0 0 0 3px rgba(99,179,237,0.08);
        }
 
        .cadastro-btn {
          width: 100%;
          padding: 13px;
          background: #63B3ED;  
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
          background: "radial-gradient(circle, rgba(99,179,237,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
 
        {/* Badge */}
        <span style={{
          display: "inline-block",
          background: "rgba(99,179,237,0.12)",
          color: "#63B3ED",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "4px 12px",
          borderRadius: 999,
          border: "0.5px solid rgba(99,179,237,0.3)",
          marginBottom: "1rem",
        }}>
          novo curso
        </span>
 
        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 28,
          fontWeight: 400,
          color: "#f4f4f5",
          margin: "0 0 0.25rem",
          lineHeight: 1.2,
        }}>
          Cadastrar curso
        </h1>
 
        <p style={{ fontSize: 13, color: "#71717a", margin: "0 0 2rem" }}>
          Preencha os dados para criar o curso
        </p>
 
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: "1.5rem" }}>
 
            {/* Nome */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#71717a" }}>
                Nome do curso
              </label>
              <input
                className="cadastro-input"
                type="text"
                placeholder="Ex: Desenvolvimento Web"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
 
            {/* Professor + Carga Horária */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#71717a" }}>
                  Professor
                </label>
                <input
                  className="cadastro-input"
                  type="text"
                  placeholder="Ex: Ana Souza"
                  value={professor}
                  onChange={(e) => setProfessor(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#71717a" }}>
                  Carga horária
                </label>
                <input
                  className="cadastro-input"
                  type="number"
                  placeholder="Ex: 40"
                  value={cargaHoraria}
                  onChange={(e) => setCargaHoraria(e.target.value)}
                />
              </div>
            </div>
 
            {/* Descrição */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#71717a" }}>
                Descrição
              </label>
              <textarea
                className="cadastro-textarea"
                placeholder="Descreva o conteúdo e objetivos do curso..."
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
          </div>
 
          <button className="cadastro-btn" type="submit">
            Cadastrar curso
          </button>
        </form>
 
        <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)", margin: "1.5rem 0" }} />
 
        <p style={{ textAlign: "center", fontSize: 12, color: "#3f3f46", margin: 0 }}>
          Quer ver todos os cursos?{" "}
          <span
            style={{ color: "#63B3ED", cursor: "pointer" }}
            onClick={() => router.push("/cursos")}
          >
            Ver listagem
          </span>
        </p>
      </div>
    </div>
  )
}