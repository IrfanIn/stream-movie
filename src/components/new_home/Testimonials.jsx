import React, { useState } from 'react'
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonials = () => {
    const data = [
        {
            text: "Nice Services :)",
            imageUser: 'https://xsgames.co/randomusers/avatar.php?g=male',
            name: 'Johnny dep',
            work: 'Lawyer',
        },
        {
            text: "I think this is the best movies provider, recommended!",
            imageUser: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Christien',
            work: 'Accounting',
        },
        {
            text: "Enjoying my weekend with movies on streen thumbs up ;)",
            imageUser: 'https://xsgames.co/randomusers/avatar.php?g=male',
            name: 'Bastian',
            work: 'Fighter',
        },
        {
            text: "I Love You 3000",
            imageUser: 'https://xsgames.co/randomusers/avatar.php?g=female',
            name: 'Mia',
            work: 'Scientist',
        },
    ]

    const [testiSwiper, setTestiSwiper] = useState();

    const testimoni = props => {
        return <div className={`p-6 bg-[#262a35] flex flex-col items-center h-72 rounded-xl`} key={props.id}>
            <p className='text-sm/6 h-24 overflow-clip text-center text-gray-300 mb-4'>{props.text}</p>
            <img className='h-20 w-20 rounded-full' src={props.imageUser} alt="" />
            <h3 className='text-white text-xl py-4'>{props.name}</h3>
            <p className="text-gray-300 text-sm">{props.work}</p>
        </div>
    }

    return (
        <div className='content py-10'>
            <div className="flex justify-between items-center mb-12">
                <h1 className="subtitle">what they think<br />about our service</h1>
                <p className='text-gray-300'>the following are the opinions of customers who<br />have used and experienced our services</p>
            </div>
            <div className='relative group cursor-pointer'>
                <Swiper modules={[Controller]} spaceBetween={30} slidesPerView={3}
                    onSwiper={swiper => setTestiSwiper(swiper)}
                    controller={{ control: testiSwiper }}
                >
                    {
                        data.map((value, key) => {
                            value.id = ++key;
                            return <SwiperSlide key={value.id}>{testimoni(value)}</SwiperSlide>
                        })
                    }
                </Swiper>
                <div className="absolute justify-between inset-0 items-center z-50 -left-8 -right-8 flex opacity-0 group-hover:opacity-100 transition-all ease-in-out">
                    <button className='py-4 px-6 rounded-full border border-[#454d5d] hover:border-red-600 group'
                        onClick={() => testiSwiper.slidePrev()}>
                        <i className="fas fa-chevron-left text-[#454d5d] group-hover:text-red-600"></i>
                    </button>
                    <button className='py-4 px-6 rounded-full border border-[#454d5d] hover:border-red-600 group'
                        onClick={() => testiSwiper.slideNext()}>
                        <i className="fas fa-chevron-right text-[#454d5d] group-hover:text-red-600"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials