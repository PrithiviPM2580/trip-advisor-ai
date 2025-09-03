import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <section className='w-full h-full pt-20 flex flex-col gap-5 items-center justify-center '>
            <h1 className='h1 text-center'>Plan Your Perfect<br />Trip with AI</h1>
            <p className='text-center w-[70%] sm:w-[50%]'>Discover destinations, explore tours, and get personalized itineraries—all in one place. Sign in with Google and start your adventure today!</p>
            <Link to="/create-trip">
                <Button className="button cursor-pointer text-[10px] sm:text-[12px]">Get Started</Button>
            </Link>
            <div className="hero-card"></div>
        </section>
    )
}

export default Hero