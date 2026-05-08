import LoginForm from "@/components/LoginForm";
import { loginAction } from "./actions";

export default function LoginPage(){


    return( 
        <div className="bg-gray-600 p-10 flex justify-center items-center flex-col w-screen h-screen ">
            <LoginForm onSend={loginAction}/>
        </div>
    )
}