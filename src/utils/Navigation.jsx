import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const links = ['home', 'movies', 'category', 'pricing', 'about']
    const [Url, setUrl] = useState('')

    return (
        <div className='flex max-w-[85vw] max-h-[15vh] m-auto p-3.5 text-white inset-x-0 z-50 absolute items-center'>
            <div className="flex flex-1 justify-between">
                <div className="py-3 flex gap-2.5 w-1/4 select-none cursor-pointer items-center">
                    <img src="images/stream-logo-transparent.png" alt="streen logo" className='w-[inherit]' />
                    <h1 className='self-center text-3xl'>Streen</h1>
                </div>
                <nav className='capitalize hidden lg:flex text-lg items-center gap-8'>
                    {links.map(e =>
                        <Link
                            key={e}
                            to={e === 'home' ? '/' : `/${e}`}
                            className={`
                            hover:text-white hover:font-bold transition-colors ease-in-out text-gray-300
                            ${Url === e.toLowerCase ? 'text-red-500' : ''}`
                            }
                            onClick={() => setUrl(e)}>
                            {e}
                        </Link>
                    )}
                </nav>
            </div>
            <div className="flex w-1/4 justify-end space-x-8">
                <i className="far fa-bell text-xl relative dot-notif after:right-0 after:top-1"></i>
                <i className="fas fa-magnifying-glass text-xl"></i>
                <i className="far fa-user text-xl"></i>
                <i className="fas fa-bars-staggered text-xl"></i>
            </div>
        </div>
    )
}

export default Navigation

