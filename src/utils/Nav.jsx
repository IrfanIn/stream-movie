import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const links = ['home', 'movies', 'series', 'category', 'pricing', 'about']
    const [Url, setUrl] = useState('')

    return (
        <div className='flex max-w-[85vw] max-h-[15vh] m-auto p-3.5 text-white inset-x-0 z-50 absolute'>
            <div className="h-[inherit] flex gap-2.5 w-1/4 select-none cursor-pointer">
                <img src="images/stream-logo-transparent.png" alt="" />
                <h1 className='self-center text-3xl'>Streen</h1>
            </div>
            <nav className='capitalize hidden lg:flex text-lg items-center justify-between w-3/4'>
                {links.map(e =>
                    <Link
                        key={e}
                        to={e === 'home' ? '/' : `/${e}`}
                        className={`
                            hover:text-red-400 hover:pb-1.5 transition-all ease-in-out 
                            ${Url === e.toLowerCase ? 'text-red-500' : ''}`
                        }
                        onClick={() => setUrl(e)}>
                        {e}
                    </Link>
                )}
                <div className="flex gap-8">
                    <i className="fas fa-magnifying-glass"></i>
                    <i className="fas fa-user"></i>
                </div>
            </nav>
            <div className="menu-wrapper">
                <div className="menus">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Nav

