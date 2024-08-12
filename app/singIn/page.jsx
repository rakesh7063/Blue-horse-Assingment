"use client"

import InputFiledData from "@/componate/inputfiled";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
const SingInPage = ()=>{
const innitialData = {
    "email": "",
    "password": ""
}

    const [user, setUser] = useState(innitialData);
const router = useRouter()
const [logData, setlogData] = useState(false)
const submitHandle = async (e)=>{

    e.preventDefault();
console.table(user)
    const res = await fetch("/api/singIn",{
        method : "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    let data = await res.json();
    if(data.status){
        alert(data.msg)
        router.push("/")
    }
    else {
       alert(data.msg)

    }

    setUser(innitialData);
}


    return(
        <div className="mt-10">
            <h1>
                LogIn page
            </h1>
            <InputFiledData user ={user} setUser = {setUser} submitHandle ={submitHandle} logData={logData}/>
            <div>
                <span>If you have not accout</span>
                <span className="p-8 bg-blue">
                    <Link href="/singUp">Click here Go to SingUp page </Link>
                </span>
            </div>
        </div>
    )


}
export default SingInPage;