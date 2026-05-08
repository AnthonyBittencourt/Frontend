"use client"

import Link from "next/link";
import {Trash} from 'lucide-react'
import { deleteCurso } from "@/app/cursos/actions";
import { useRouter } from "next/navigation";

interface Props{
    id: number;
    nome:string
}

export default function CursosItem({id, nome}: Props){
    const router = useRouter()

    function handleDelete(){
        deleteCurso(id)
        router.refresh()
    }
    return(
        <div className="flex-gap">
            <Link href={`/curso/${id}`} className="flex text-2xl font-medium pt-5 justify-center w-100  border-b-3 border-b-gray-500">
                <li>{nome}</li>
            </Link>
            <button className="text-red-500" onClick={handleDelete}><Trash/></button>
        </div>

    );
}
