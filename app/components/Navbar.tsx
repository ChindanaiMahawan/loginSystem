import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='flex gap-4 border-b p-4'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/product"}>Product</Link>
            <Link href={"/contect"}>Contect</Link>
            <div className='absolute top-4 right-2'>
                <ul className='flex'>
                    <li className='mx-3'><Link href={"/login"}>Sigh In</Link></li>
                    <li className='mx-3'><Link href={"/register"}>Sigh Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
