import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Controller } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import data from '../../assets/data.json'

const Movies = () => {

    const [MovieBy, setMovieBy] = useState('all')
    const [Movies, setMovies] = useState([])
    const [ProgressBar, setProgressBar] = useState(0)
    const [movieSwiper, setMovieSwiper] = useState()
    const type = [
        {
            type: 'all',
            url: '/discover/movie',
            list: useState([]),
        },
        {
            type: 'popular',
            url: '/movie/popular',
            list: useState([]),
        },
        {
            type: 'rating',
            url: '/movie/top_rated',
            list: useState([]),
        },
        {
            type: 'vote',
            url: '/discover/movie?vote_count.gte=200',
            list: useState([]),
        },
        {
            type: 'upcoming',
            url: '/movie/upcoming',
            list: useState([]),
        }
    ]

    const MovieList = props =>
        <div className={`h-full w-64`}>
            <div className='h-80 '>
                <div className="h-full">
                    <img src={`${data.movie_image_endpoint}/${props.poster_path}`} alt=""
                        className='object-cover h-full rounded-lg' />
                </div>
            </div>
            <h3 className='mt-3 mb-2 text-xl text-white font-generis font-semibold'>{props.title}</h3>
            <p className='text-ellipsis max-h-10 font-sans text-base/5 text-gray-300 overflow-hidden'>
                {props.overview}
            </p>
        </div>


    const slideChangeHandler = (event) => {
        if (event.isEnd) return setProgressBar(100)
        const rate = ++event.realIndex / 2 * 10
        setProgressBar(rate)
    }

    const movies = async () => {
        const req = await fetch(`${data.movie_endpoint}/discover/movie`,
            { headers: { Authorization: `Bearer ${data.movie_access_token}` } })
        const res = await req.json()
        setMovies(res.results)
    }

    useEffect(() => {
        movies()
    }, [MovieBy])

    return (
        <div className='max-w-[85vw] m-auto min-h-screen flex flex-col'>
            <h1 className='subtitle'>
                the most popoular<br />movies to watch in 2023
            </h1>
            <div className="flex my-6 space-x-6 items-center mb-12">
                {type.map((value, key) =>
                    <button className={`py-2 px-7 rounded-2xl capitalize text-gray-300
                        hover:bg-red-600 hover:border-red-600 cursor-pointer
                        ${MovieBy === value.type ? 'bg-red-600' : 'border border-gray-300'}`}
                        key={key}
                        onClick={() => setMovieBy(value.type)}
                    >
                        {value.type}
                    </button>)
                }
                <Link className='text-white underline font-sans font-light pl-10'>
                    See more 10+ <i className="fas fa-arrow-right ml-2"></i>
                </Link>
            </div>

            <div>
                <Swiper modules={[Controller]} slidesPerView={4} spaceBetween={25}
                    onSwiper={swiper => setMovieSwiper(swiper)}
                    onSlideChange={slideChangeHandler}
                    controller={{ control: movieSwiper }}
                >
                    {
                        Movies.map(value => <SwiperSlide key={value.id}>{MovieList(value)}</SwiperSlide>)
                    }
                </Swiper>
            </div>

            <div className="flex justify-between pt-8 items-center">
                <div
                    className={`bg-[#454d5d] h-[3px] rounded-full relative flex-1`}>
                    <div className="absolute bg-red-600 inset-0 transition-all ease-in-out duration-1000"
                        style={{ width: `${ProgressBar}%` }}></div>
                </div>
                <div className="flex space-x-4 items-center pl-10">
                    <button className='py-4 px-6 rounded-full border border-[#454d5d] hover:border-red-600 group'
                        onClick={() => movieSwiper.slidePrev()}>
                        <i className="fas fa-chevron-left text-[#454d5d] group-hover:text-red-600"></i>
                    </button>
                    <button className='py-4 px-6 rounded-full border border-[#454d5d] hover:border-red-600 group'
                        onClick={() => movieSwiper.slideNext()}>
                        <i className="fas fa-chevron-right text-[#454d5d] group-hover:text-red-600"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Movies