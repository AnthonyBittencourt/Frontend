"use client";

import { Aluno } from "@/app/interfaces/alunos";
import { useParams } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";
import { getAluno, updateAluno } from "../actions";
import { useRouter } from "next/navigation";


export default function AlunoPage() {
  const { id } = useParams();
  const [aluno, setAluno] = useState({} as Aluno);
  const router = useRouter()

  useEffect(() => {
    getAluno(Number(id)).then((response) => setAluno(response));
  }, [id]);

  function handleChange(value: string|number, key: keyof Aluno){
    setAluno((oldState) => ({...oldState, [key]: value}))
  }

  async function handleUpdate(e: SubmitEvent){
    e.preventDefault()
    const response = await updateAluno(Number(id), aluno)

    if(response){
      alert(response)
      return
    }
    router.push(`/aluno/${id}`)
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
        }

        .card {
          background: #111;
          border: 1px solid #222;
          border-radius: 12px;
          padding: 40px;
          width: 100%;
          max-width: 420px;
        }

        .header {
          margin-bottom: 32px;
        }

        .header h1 {
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .header p {
          font-size: 14px;
          color: #555;
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
          border: 1.5px solid #222;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #fff;
          background: #000;
          outline: none;
          transition: border-color 0.15s;
        }

        .field input:focus {
          border-color: #16a34a;
        }

        .field input::placeholder {
          color: #333;
        }

        .actions {
          display: flex;
          gap: 10px;
        }

        .btn-cancel {
          flex: 1;
          padding: 11px;
          border: 1.5px solid #222;
          border-radius: 8px;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
        }

        .btn-cancel:hover {
          border-color: #444;
          color: #aaa;
        }

        .btn-submit {
          flex: 2;
          padding: 11px;
          border: none;
          border-radius: 8px;
          background: #16a34a;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          cursor: pointer;
          transition: background 0.15s;
        }

        .btn-submit:hover {
          background: #15803d;
        }

        .btn-submit:active {
          background: #166534;
        }
      `}</style>

      <div className="page">
        <div className="card">
          <div className="header">
            <h1>Editar Aluno</h1>
            <p>Atualize as informações abaixo</p>
          </div>

          <form onSubmit={handleUpdate}>
            <div className="fields">
              <div className="field">
                <label>Nome</label>
                <input
                  value={aluno.name || ""}
                  placeholder="Nome do aluno"
                  onChange={(e) => handleChange(e.target.value, "name")}
                />
              </div>

              <div className="field">
                <label>Idade</label>
                <input
                  value={aluno.idade || ""}
                  placeholder="Idade do aluno"
                  onChange={(e) => handleChange(e.target.value, "idade")}
                />
              </div>

              <div className="field">
                <label>CPF</label>
                <input
                  type="number"
                  value={aluno.cpf || ""}
                  placeholder=""
                  onChange={(e) => handleChange(Number(e.target.value), "cpf")}
                />
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  value={aluno.email || ""}
                  placeholder="Ex: usuario@email"
                  onChange={(e) => handleChange(e.target.value, "email")}
                />
              </div>
            </div>

            <div className="actions">
              <button type="button" className="btn-cancel" onClick={() => router.back()}>
                Cancelar
              </button>
              <button type="submit" className="btn-submit">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}