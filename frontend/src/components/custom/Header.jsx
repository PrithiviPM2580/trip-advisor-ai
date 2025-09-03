import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <header className='px-3 py-2 shadow-sm w-full sm:px-5 sm:py-2'>
            <nav>
                <ul className='flex justify-between items-center'>
                    <li><Link to="/">Logo</Link></li>
                    <li><Button className="cursor-pointer px-5 py-.5 text-[10px] sm:text-[12px]" >Sign In</Button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header