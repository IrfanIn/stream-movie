import React from 'react'
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'

const Header = () => {
    return (
        <div className="header">
            <div className="min-h-screen w-full -z-10 after-background">
                <video src="./images/trailer.mp4" className='w-full select-none min-h-screen object-cover' loop muted autoPlay>
                </video>
            </div>
            <div className="w-[80vw] m-auto absolute text-white flex flex-col justify-center inset-0">
                <h1 className='text-6xl font-semibold'>Unlimited movies, <br />TV shows, and more</h1>
                <p className='my-5'>Find the latest and greatest movies and shows <br />all available on Streen.</p>
                <div className="flex gap-2">
                    <Link to='/login' className='stream-button bg-red-600 mr-4'>Get Started</Link>
                    <Scroll
                        spy={true}
                        to='pricing'
                        smooth={true}
                        className='stream-button bg-gray-700 scroll-smooth'>
                        Show Plans
                    </Scroll>
                </div>
            </div>
        </div>
    )
}

export default Header