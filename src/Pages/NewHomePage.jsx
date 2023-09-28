import React from 'react'
import Navigation from '../utils/Navigation'
import Header from '../components/new_home/Header'
import MovieType from '../components/new_home/MovieType'
import Movies from '../components/new_home/Movies'
import Plan from '../components/new_home/Plan'
import Features from '../components/new_home/Features'
import Testimonials from '../components/new_home/Testimonials'
import Footer from '../components/new_home/Footer'

const NewHomePage = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <MovieType />
            <Movies />
            <Plan />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default NewHomePage