"use server"

import { Curso } from "@/app/interfaces/cursos";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export async function getCurso(id: number) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("access_token")?.value;

  const response = await fetch(`http://localhost:8080/curso/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {tags:["pegarDados"]}
  })
    
    if(response.status === 401){
      redirect("/login")
    }
    
    const data = await response.json()


  return data as Curso;
}

export async function updateCurso(id:number, curso: Curso){
  const cookiesStore = await cookies()
  const token = cookiesStore.get("access_token")?.value

  const response = await fetch(`http://localhost:8080/cursos/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(curso)
  })

  if(response.status === 401){
    redirect("/login")
  }
  const data = await response.json()

  if(response.status === 200) {
    revalidateTag("pegarDados", "max")
    return;
  }
  return data as Curso
}