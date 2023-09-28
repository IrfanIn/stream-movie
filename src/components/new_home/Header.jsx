import React from 'react'
import Clips from './Clips'

const Header = () => {
    return (
        <div
            className='min-h-screen bg-cover z-30 relative bg-center bg-no-repeat after:content[""] after:bg-gray-950/70 after:inset-0 after:absolute'
            style={{ backgroundImage: "url('images/movie-image.jpg')" }}
        >
            <div className='absolute h-full w-full bg-gradient-to-r from-slate-700/80 left-0'></div>
            <div className="flex absolute z-50 h-full w-[85vw] inset-x-1/2 -translate-x-1/2">
                <div className="flex w-1/2 justify-center flex-col space-y-5">
                    {/*<div className="flex space-x-5 w-2/3  items-center">
                        <p className='text-slate-300/75 text-2xl font-sans font-thin flex space-x-4'>Welcome</p>
                        <hr className='border border-slate-300/75 flex-1' />
                    </div>*/}
                    <div className="font-bold text-7xl text-white font-generis capitalize">
                        let's make your<br /> own cinema
                    </div>
                    <p className='text-slate-300 text-lg'>
                        You can still enjoy the latest movies and other<br /> movies online and at lower price
                    </p>
                    <div className="flex space-x-4 w-2/3">
                        <button className='stream-button w-full border border-red-600 text-red-600 font-semibold font-generis'>
                            show plan
                        </button>
                        <button className='stream-button w-full bg-red-600 text-white'>
                            get started
                        </button>
                    </div>
                </div>
                <Clips />
            </div>
        </div>
    )
}

export default Header