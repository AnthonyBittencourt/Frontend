"use client";

import { Curso } from "@/app/interfaces/cursos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurso } from "./actions";
import Link from "next/link";
import { PenBox, Clock3, User2, Users } from "lucide-react";

export default function CursoPage() {
  const { id } = useParams();
  const [curso, setCurso] = useState({} as Curso);

  useEffect(() => {
    getCurso(Number(id)).then((response) => setCurso(response));
  }, [id]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .page {
          min-height: 100vh;
          width: 100%;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }

        .card {
          width: 100%;
          max-width: 500px;
          background: #111;
          border: 1px solid #222;
          border-radius: 14px;
          padding: 36px;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .title-area h1 {
          font-size: 24px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .title-area p {
          font-size: 14px;
          color: #555;
        }

        .edit-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid #222;
          background: #000;
          color: #888;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.15s;
        }

        .edit-btn:hover {
          border-color: #16a34a;
          color: #16a34a;
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #0a0a0a;
          border: 1px solid #1f1f1f;
          padding: 14px;
          border-radius: 10px;
        }

        .info-item svg {
          color: #16a34a;
        }

        .info-text span {
          display: block;
          font-size: 12px;
          color: #666;
          margin-bottom: 2px;
        }

        .info-text strong {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
        }

        .students-title {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .students-title svg {
          color: #16a34a;
        }

        .students-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style: none;
        }

        .student-item {
          padding: 12px 14px;
          border-radius: 8px;
          background: #0a0a0a;
          border: 1px solid #1f1f1f;
          color: #ddd;
          font-size: 14px;
        }

        .empty {
          color: #555;
          font-size: 14px;
        }

        .desc-item p {
          font-size: 16px;
          color: #ddd;
          padding: 2px 5px;
        }

        .desc-item h1 {
          font-size: 16px;
          color: #d0d0d0d0;
          background: #0a0a0a;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #1f1f1f;

        }

        .desc-item{

        }
      `}</style>

      <div className="page">
        <div className="card">
          <div className="header">
            <div className="title-area">
              <h1>{curso.nome}</h1>
              <p>Detalhes do curso</p>
            </div>

            <Link href={`/curso/${id}/editar`} className="edit-btn">
              <PenBox size={18} />
            </Link>
          </div>

          <div className="info">
            <div className="desc-item">
              <p>Descrição do curso</p>
              <h1>{curso.descricao}</h1>
            </div>
            <div className="info-item">
              <User2 size={18} />
              <div className="info-text">
                <span>Professor</span>
                <strong>{curso.professor}</strong>
              </div>
            </div>

            <div className="info-item">
              <Clock3 size={18} />
              <div className="info-text">
                <span>Carga Horária</span>
                <strong>{curso.cargaHoraria} horas</strong>
              </div>
            </div>
          </div>

          <div className="students-title">
            <Users size={18} />
            <span>Alunos Matriculados</span>
          </div>

          <ul className="students-list">
            {curso.alunos?.length ? (
              curso.alunos.map((aluno) => (
                <li key={aluno.id} className="student-item">
                  {aluno.name}
                </li>
              ))
            ) : (
              <p className="empty">Nenhum aluno matriculado.</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}