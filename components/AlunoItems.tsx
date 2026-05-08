"use client"

import Link from "next/link";
import {Trash} from 'lucide-react'
import { deleteAluno } from "@/app/alunos/actions";
import { useRouter } from "next/navigation";

interface Props{
    id: number;
    name:string
}

export default function AlunoItem({id, name}: Props){
    const router = useRouter()

    function handleDelete(){
        deleteAluno(id)
        router.refresh()
    }
    return(
        <div className="flex-gap">
            <Link href={`/aluno/${id}`} className="flex text-2xl font-medium pt-5 justify-center w-100  border-b-3 border-b-gray-500">
                <li>{name}</li>
            </Link>
            <button className="text-red-500" onClick={handleDelete}><Trash/></button>
        </div>

    );
}
