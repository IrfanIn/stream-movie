import React from 'react'

const Footer = () => {
    const data = [
        {
            title: 'services',
            list: ['movies', 'TV Channel', 'cinema ticket', 'newsletter', 'blogs article'],
        },
        {
            title: 'information',
            list: ['sign up', 'download app', 'choose plan', 'pay method'],
        },
        {
            title: 'company',
            list: ['partnership', 'terms of use', 'about', 'pricing', 'contact'],
        },
    ]

    const icons = ['facebook', 'twitter', 'instagram', 'pinterest-p']

    const footerList = props => {
        return <div key={props.title} className='capitalize'>
            <h2 className="text-white text-2xl mb-6">{props.title}</h2>
            {props.list.map(value =>
                <p key={value} className="text-md cursor-pointer transition-all ease-in-out hover:text-red-600 hover:ml-2.5 text-gray-300 mb-3 ">
                    {value}
                </p>
            )}
        </div>
    }

    return (
        <div className="bg-[#262a35] mt-10">
            <footer className='content py-8 grid grid-cols-4'>
                {
                    data.map(value => footerList(value))
                }
                <div className="capitalize">
                    <h2 className="text-white text-2xl mb-6">get in touch</h2>
                    <p className="text-md text-gray-300 mb-3">
                        Stay connected with us and let's know more stories about new movies and More Explorer us for get it
                    </p>
                    <div className="flex space-x-4">
                        {
                            icons.map(value =>
                                <div key={value} className="h-8 w-8 flex items-center justify-center bg-[#383e4e] rounded-full cursor-pointer">
                                    <i className={`fab fa-${value} text-lg text-red-600`}></i>
                                </div>
                            )
                        }
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer