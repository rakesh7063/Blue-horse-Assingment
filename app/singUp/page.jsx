"use client"

import InputFiledData from "@/componate/inputfiled";
import { RSC_VARY_HEADER } from "next/dist/client/components/app-router-headers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
const SingUpPage = ()=>{
const innitialData = {
    "email": "",
    "password": ""
}

    const [user, setUser] = useState(innitialData);
const router = useRouter()
const [logData, setlogData] = useState(true)
const submitHandle = async (e)=>{

    e.preventDefault();

    const res = await fetch("/api/singUp",{
        method : "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })

    let data = await res.json();
    console.log(data)
   if(data.status){
       alert(data.msg)
       router.push("/singIn")
   }

   else alert(data.msg)

    setUser(innitialData);
}


    return(
        <div className="mt-5">
            <h1>
                SingUp Page
            </h1>
            <InputFiledData user ={user} setUser = {setUser} submitHandle ={submitHandle} logData ={logData}/>
            <div>
                <span>If you have allready account</span>
                <span className="p-8">
                    <Link href="/singIn">Click here Go to SingIn page </Link>
                </span>
            </div>
        </div>
    )


}
export default SingUpPage;