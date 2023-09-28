import React from 'react'
import data from '../../assets/data.json'

const MovieType = () => {
    const TypeCard = props =>
        <div className="p-6 rounded-lg flex items-center bg-[#262a35] space-x-4 hover:bg-[#383e4e] group cursor-pointer" key={props.title}>
            <div className="w-16 p-4 bg-[#22262f] flex items-center justify-center rounded-lg">
                <i className={`fas fa-${props.icon} text-red-600 group-hover:text-white text-xl`}></i>
            </div>
            <div className="flex-1 flex flex-col">
                <h3 className='font-semibold text-white text-lg font-generis capitalize'>{props.title}</h3>
                <p className='text-slate-300 mb-3'>{props.amount}+ Movies</p>
                <p className='text-red-500 group-hover:text-blue-500 capitalize underline'>view more</p>
            </div>
        </div>

    return (
        <div className='content py-12'>
            <div className="flex justify-between items-center pb-8">
                <h1 className='text-6xl/tight text-white font-bold font-generis capitalize'>
                    choose the type of<br />film you liked
                </h1>
                <p className="text-lg text-gray-300">
                    We present many films from various main<br /> categories, let's choose and search film of you liked
                </p>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                {data.movie_type.map(item => TypeCard(item))}
            </div>
        </div>
    )
}

export default MovieType