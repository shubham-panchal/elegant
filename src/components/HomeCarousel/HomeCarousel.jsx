import React from 'react'
import classes from './HomeCarousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HOME_CAROUSEL_SETTINGS } from '../../constants/app-constant'
import { homeCarouselImages } from '../../assets/imageKeyMapping'
import { Navigation, Pagination } from 'swiper/modules'




const HomeCarousel = () => {
    const settings = HOME_CAROUSEL_SETTINGS
    return (
        <div className={classes?.home_carousel_container}>
            <Swiper {...settings} modules={[Navigation, Pagination]} className={classes?.swiper}>
                <SwiperSlide className={classes?.swiper_slide}><img src={homeCarouselImages?.homeCarouselImage1} className={classes?.carousel_image} alt="carousel image 1" /></SwiperSlide>
                <SwiperSlide className={classes?.swiper_slide}><img src={homeCarouselImages?.homeCarouselImage2} className={classes?.carousel_image} alt="carousel image 2" /></SwiperSlide>
                <SwiperSlide className={classes?.swiper_slide}><img src={homeCarouselImages?.homeCarouselImage3} className={classes?.carousel_image} alt="carousel image 3" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeCarousel