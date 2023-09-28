import React from 'react'

const Features = () => {
    const data = [
        {
            id: 1,
            icon: 'award',
            title: 'official movies',
            description: 'We provide new films that are ready to be shown in cinemas on this platform'
        },
        {
            id: 2,
            icon: 'circle-check',
            title: 'best choose',
            description: 'Is the best choice for all circles and every need for films that are liked and ready'
        },
        {
            id: 3,
            icon: 'film',
            title: 'biggest platform',
            description: 'Streen been established since 10 years ago and continues to grow until now'
        },
    ]

    const feature = props =>
        <div className="flex space-x-8" key={props.id}>
            <i className={`fas fa-${props.icon || 'fa-user'} text-3xl text-red-600`}></i>
            <div>
                <h3 className='capitalize text-white text-xl'>{props.title}</h3>
                <p className="mt-3 text-gray-300">{props.description}</p>
            </div>
        </div>

    return (
        <div className='content py-10'>
            <div className="flex justify-between items-center">
                <h1 className="subtitle">best features that<br />won't disappoint</h1>
                <p className='text-gray-300'>What makes you have to try our service is the<br /> features you will enjoy from us</p>
            </div>
            <div className="grid grid-cols-3 flex-1 mt-16 gap-8">
                {
                    data.map(e => feature(e))
                }
            </div>
        </div>
    )
}

export default Features