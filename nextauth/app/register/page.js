
"use client"
import Link from "next/link";

export default function register(){
    return(
        <div className="p-24 w-100 h-screen flex  items-center justify-center  p-24">
           <form action="">
           <div className="bg-white rounded-xl flex flex-col text-black gap-4 h-100 w-80 center p-10">
           <div className="flex flex-col gap-1">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" id="username" className="border-2 p-1" required/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email" id="email" className="border-2 p-1" required/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input type="passowrd" name="password" placeholder="password" id="password" className="border-2 p-1" required/>
            </div>
            <div className="flex justify-between " style={{alignItems:"center"}}>
                <div className=""><button className="py-2 px-4 bg-black text-white rounded-lg">Login</button></div>
                <div style={{fontSize:'10px'}}><p>already have account?</p> <Link href={"/login"} className="underline">Login here</Link></div>
            </div>
           </div>
           </form>
        </div>
    )
}