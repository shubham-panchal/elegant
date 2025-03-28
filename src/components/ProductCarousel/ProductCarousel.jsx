import React from 'react'
import classes from './ProductCarousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import ProductCard from '../ProductCard/ProductCard'
import { PRODUCT_CAROUSEL_SETTINGS, PRODUCTS } from '../../constants/app-constant'


const ProductCarousel = () => {
    const settings = PRODUCT_CAROUSEL_SETTINGS
    return (
        <div className={classes?.product_carousel_container}>
            <Swiper {...settings} modules={[Navigation, Pagination]}>
                {PRODUCTS.map(product =>
                    <SwiperSlide key={product?._id} className={classes?.swiper_slide}>
                        <div className={classes?.product_cards_container}>
                            <ProductCard product={product}></ProductCard>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

            <div className={classes?.progress_pagination}>
                <div className={classes?.progress_bar}>
                    <div className={classes?.fill}></div>
                </div>
            </div>
        </div>
    )
}

export default ProductCarousel