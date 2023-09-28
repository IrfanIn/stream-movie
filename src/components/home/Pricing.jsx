import React, { useState } from 'react'
import data from './data.json'
import PricingCard from './PricingCard'

const Pricing = () => {
    const [billing, setBilling] = useState('Monthly')

    const billingHandler = plan => setBilling(plan)

    const money = currency => {
        return Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 10 }).format(currency)
    }

    const onPaymentHandler = async (amount) => alert(amount)

    return (
        <div className="bg-gray-100" id='pricing'>
            <div className='content py-12 flex flex-col'>
                <h1 className='text-center text-4xl font-bold mb-1'>Choose your movies plans</h1>
                <p className='text-center text-gray-500'>Pricing Plans for every budget</p>
                <div className='py-16 flex justify-between flex-1'>
                    <div className='lg:block hidden'>
                        <h3 className='text-3xl font-semibold mb-3'>Choose plan</h3>
                        {['Yearly', 'Monthly'].map((e, key) =>
                            <div
                                className={`
                                    flex gap-2.5 items-center text-xl cursor-pointer group mb-2
                                    ${e === billing ? 'text-sky-500' : ''}
                                `}
                                onClick={() => billingHandler(e)}
                            >
                                <i className="fas fa-circle-dot text-sm group-hover:text-sky-500"></i>
                                <span className={e === billing ? 'text-sky-500' : 'text-gray-500'}>{e} billing</span>
                            </div>
                        )}
                    </div>
                    <div className='w-3/4 flex'>
                        {data.map((e, key) => {
                            const price = billing === 'Yearly' ? (e.price * 12) : e.price;
                            return e.id !== 3 ?
                                <PricingCard
                                    key={e.id}
                                    pro={key === 1 ? true : false}
                                    rounded={key === 0 ? true : false}
                                    title={e.title}
                                    subtitle={e.subtitle}
                                    price={money(price)}
                                    desc={e.desc}
                                    button={e.button}
                                    benefit={e.benefit}
                                    paymentHandler={() => onPaymentHandler(price)}
                                /> :
                                ''
                        }
                        )}
                        <div className='p-6 rounded-xl bg-[#232627] scale-110 '>
                            <div className="flex items-center justify-between">
                                <h3 className='text-2xl text-red-400 mb-1 font-bold'>
                                    {data[2].title}
                                </h3>
                                <i className={`bg-white py-1.5 px-2 rounded-full ${data[2].icon}`}></i>
                            </div>
                            <p className='text-sm mb-5 text-white'>{data[2].subtitle}</p>
                            <h3 className='text-gray-500 text-2xl mb-2'>
                                <span className='text-2xl font-bold text-white mr-2'>
                                    {billing === 'Yearly' ? money(data[2].price * 12) : money(data[2].price)}
                                </span>
                                / mo
                            </h3>
                            <p className='text-sm text-gray-400'>{data[2].desc}</p>
                            <hr className='border border-white my-6' />
                            {data[2].benefit.map(e =>
                                <div className="flex gap-2 items-center mb-2">
                                    <i className="fas fa-circle-check text-gray-400"></i>
                                    <p className='text-white'>{e}</p>
                                </div>
                            )}
                            <button className='text-center py-2 w-full mt-3 rounded-lg bg-blue-500 text-white'>
                                {data[2].button}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing