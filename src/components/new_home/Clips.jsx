import React from 'react'

const Clip = (props) =>
    <div className="flex-1 h-32 flex justify-center items-center" key={props.index}>
        <i className="fas fa-circle-play absolute text-3xl text-gray-100/70"></i>
        <img src={`images/clips/clip-${props.index}.png`} alt="Clips" className='h-full w-full object-cover rounded-lg' />
    </div>


const Clips = () => {
    return (
        <div className='flex flex-1 my-[5%] relative justify-center'>
            <div className='self-center absolute flex flex-col text-center space-y-2'>
                <i className="fas fa-circle-play text-5xl text-white"></i>
                <p className='text-white underline capitalize text-lg'>Watching now</p>
            </div>
            <div className="flex flex-1 space-x-6 self-end pb-8">
                {Array.from({ length: 3 }, (val, key) => Clip({ index: ++key }))}
            </div>
        </div>
    )
}

export default Clips