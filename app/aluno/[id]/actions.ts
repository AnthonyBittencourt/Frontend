"use server"

import { Aluno } from "@/app/interfaces/alunos";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export async function getAluno(id: number) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("access_token")?.value;

  const response = await fetch(`http://localhost:8080/aluno/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {tags:["pegarDados"]}
  })

    const data = await response.json()
    if(response.status === 401){
      redirect("/login")
    }

  return data as Aluno;
}

export async function updateAluno(id:number, aluno: Aluno){
  const cookiesStore = await cookies()
  const token = cookiesStore.get("access_token")?.value

  const response = await fetch(`http://localhost:8080/alunos/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aluno)
  })

  if(response.status === 401){
    redirect("/login")
  }
  const data = await response.json()

  if(response.status === 200) {
    revalidateTag("pegarDados", "max")
    return;
  }
  return data as Aluno
}