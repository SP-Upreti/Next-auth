"use client"
// import { headers } from "next/headers";
import Link from "next/link";
import { useState } from "react";

export default  function login(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!name || !email || !password){
            setError("fill the fields");
            return;
        }
        try {
            const res = await fetch('api/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    name,email,password
                )
            })
            if(res){
                const form = e.target;
                form.reset();
            }
            else {
                console.log("user registration failed");
            }
        } catch (error) {
            
        }
    }

    return(
        <div className="p-24 w-100 h-screen flex  items-center justify-center  p-24">
           <form onSubmit={handleSubmit}>
           <div className="bg-white rounded-xl flex flex-col text-black gap-4  w-80 center p-10 shadow-xl">
           <div className="flex flex-col gap-1">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" onChange={(e)=>setName(e.target.value)} id="username" className="border-2 p-1" maxLength={30} />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="exapmle@gmail.com" onChange={(e)=>setEmail(e.target.value)} id="email" className="border-2 p-1"  />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input type="passowrd" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" id="password" className="border-2 p-1"  maxLength={20}/>
            </div>
            <div className="flex justify-between " style={{alignItems:"center"}}>
                <div className=""><button className="py-2 px-4 bg-black text-white rounded-lg">Register</button></div>
                <div style={{fontSize:'10px'}}><p> already have account?</p> <Link href={"/login"} className="underline">Login here</Link></div>
            </div>
            {
                error && (
                    <div  style={{backgroundColor:'red',width:"50%",padding:"4px 7px",color:"white"}}>
                       {error}
                    </div>
                )
            }
           </div>
           </form>
        </div>
    )
}