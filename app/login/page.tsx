import React from 'react'

function LoginPage() {
    return (
        <main className='mt-8 flex items-start pt-20 justify-center min-h-screen'>
            <div className='flex flex-col items-center w-96 p-10 bg-gradient-to-br from-gray-400 to-gray-900 rounded-2xl border-2 border-white gap-2'>
                <h1 className='text-3xl font-bold '>Login</h1>
                <p> หน้าlogin </p>

                <input
                    type='email'
                    placeholder='Email'
                    className='w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/70'/>
                <input
                    type='password'
                    placeholder='Password'
                    className='w-full px-4 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/70'/>
                <div className='flex gap-4 w-full'>
                    <button className='w-full py-2.5 rounded-xl bg-white text-gray-900 font-semibold hover:bg-white/90 active:scale-95 transition-all'>sign in</button>
                    <button className='w-full py-2.5 rounded-xl bg-green-500 text-gray-900 font-semibold hover:bg-green/900 active:scale-95 transition-all'>summit</button>
                </div>
            </div>
        </main>
    )
}

export default LoginPage