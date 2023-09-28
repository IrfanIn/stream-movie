import React from 'react'
import { Link } from 'react-router-dom'

const Plan = () => {
    const data = [
        {
            id: 1,
            title: 'gold plan',
            subtitle: 'for those of you who like simple',
            price: '$9.99',
            isYear: false,
            list: ['unlimited movies', 'no ads', '25 downloading movies', '10 TV channel'],
        },
        {
            id: 2,
            title: 'diamond plan',
            subtitle: 'the best plan for all needs',
            price: '$19.99',
            isYear: true,
            list: ['unlimited movies', 'no ads', '100 downloading movies', '25 TV channel'],
        },
        {
            id: 3,
            title: 'platinum plan',
            subtitle: 'enjoy the full featured services',
            price: '$29.99',
            isYear: true,
            list: ['unlimited movies', 'no ads', '300 downloading movies', '100 TV channel'],
        }
    ]

    const PlanCard = props =>
        <div className='p-6 rounded-lg bg-[#262a35] text-gray-300 capitalize' key={props.id}>
            <h3 className='text-white text-center text-2xl'>{props.title}</h3>
            <p className='py-3 text-center'>{props.subtitle}</p>
            <p className='py-10 text-4xl text-center text-red-600'>{props.price}
                <span className='text-base text-gray-300'> / {props.isYear ? 'years' : 'month'}</span>
            </p>
            <ol>
                {
                    props.list.map(e => {
                        return <div className='flex items-center mb-2' key={e}>
                            <span className='absolute h-2 w-2 rounded-full bg-red-600'></span>
                            <li className='list-none ml-4'>
                                {e}
                            </li>
                        </div>
                    })
                }
            </ol>
            <button className='mt-8 w-2/4 py-3 rounded-xl px-8 bg-red-600 m-auto block'>choose plan</button>
            <Link className='mt-4 underline text-center block'>about this plan</Link>
        </div>

    return (
        <div className='min-h-screen py-6 w-[85vw] m-auto'>
            <h1 className='text-center subtitle'>
                choose the plan that<br />suits for you
            </h1>
            <p className='text-gray-300 text-center py-6 '>
                we present 3 packages that you can choose to start watching various movies you like<br />
                at low prices and according to your needs
            </p>

            <div className="grid grid-cols-3 gap-6">
                {
                    data.map(e => PlanCard(e))
                }
            </div>
        </div>
    )
}

export default Plan