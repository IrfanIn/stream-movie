import React from 'react'

const PricingCard = props => {
    return (
        <div className={`p-6 bg-white border-r ${props.rounded ? 'rounded-l-xl' : ''}`}>
            <h3 className={`text-2xl mb-1 font-bold ${props.pro ? 'text-blue-400' : 'text-black'}`}>{props.title}</h3>
            <p className='text-sm mb-5'>{props.subtitle}</p>
            <h3 className='text-gray-500 text-2xl mb-2'>
                <span className='text-2xl font-bold text-black mr-2'>{props.price}</span>
                / mo
            </h3>
            <p className='text-sm text-gray-500'>{props.desc}</p>
            <hr className='border border-gray-200 my-6' />
            {props.benefit.map(e =>
                <div className="flex gap-2 items-center mb-2" key={e}>
                    <i className="fas fa-circle-check text-gray-400"></i>
                    <p>{e}</p>
                </div>
            )}
            <button
                className='border text-center py-2 w-full mt-3 rounded-lg border-gray-400 text-gray-400 hover:bg-blue-500           hover:border-none transition-all ease-in-out hover:text-white'
                onClick={props.paymentHandler}
            >
                {props.button}
            </button>
        </div>
    )
}

export default PricingCard