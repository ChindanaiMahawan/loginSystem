"use client"
import React, { useState } from 'react'

function page_register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password != confirmPassword){
        setError("Password do not match !")
        return
    }

    if (!name || !email || !password || !confirmPassword){
        setError("please complete all input!")
        return
    }

    try{
        const res = await fetch("http://localhost:3000/api/register", {
            method : "POST",
            headers: {
                "Content-Type":"application/json"
            }, 
            body: JSON.stringify({
                name,email,password
            })
        })
        if (res.ok){
            const form = e.target as HTMLFormElement;
            setError("")
            form.reset();
        } else {
            console.log("user registration failed")
        }

    } catch(error){
        console.log("Error during register", error);
    }
  }

  
  return (
    <main className='mt-8 flex items-start pt-20 justify-center min-h-screen'>
            <div className='flex flex-col items-center w-96 p-10 bg-gradient-to-br from-gray-400 to-gray-900 rounded-2xl border-2 border-white gap-2'>
                <h1 className='text-3xl font-bold '>Register</h1>
                <p> หน้าRegister </p>

                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-3'>
                    {error &&(
                        <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                            {error}
                        </div>
                    )}
                    <input onChange={(e) => setName(e.target.value)}
                        type='text'
                        placeholder='Username'
                        className='w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/70'/>
                    <input onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        placeholder='Email'
                        className='w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/70'/>
                    <input onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Password'
                        className='w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/70'/>
                    <input onChange={(e) => setConfirmPassword(e.target.value)}
                        type='password'
                        placeholder='Confirm your password'
                        className='w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/70'/>
                    <div className='flex gap-4 w-full'>
                        <button className='w-full py-2.5 rounded-xl bg-green-500 text-gray-900 font-semibold hover:bg-green/900 active:scale-95 transition-all'>summit</button>
                    </div>
                </form>
            </div>
        </main>
  )
}

export default page_register