import React, { useEffect, useState } from 'react'
import classes from './ProductCard.module.scss'
import { PRODUCTS } from '../../constants/app-constant'
import { useDispatch, useSelector } from 'react-redux'
import { CartActions } from '../../actions/CartActions'
import { icons } from '../../assets/imageKeyMapping'

const ProductCard = ({ product }) => {
    const [addedToCart, setAddedToCart] = useState(false)
    const cart = useSelector(store => store?.cart)
    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        setAddedToCart(true)
        const addTimeout = setTimeout(() => {
            setAddedToCart(false)
            clearTimeout(addTimeout)
        }, 500);
        dispatch(CartActions?.addToCart(product))
    }


    return (
        <>

            <div className={classes?.product_card_component} key={product?._id}>
                <div className={classes?.product_body}>
                    <img src={product?.imgURL} className={classes?.product_image} alt="product" />

                    {product?.new && <div className={classes?.new_tag}>NEW</div>}
                    <div className={classes?.wishlist_icon}>
                        <img src={cart?.find(item => item?._id === product?._id) ? icons?.heartOutlinedRed : icons?.heartOutlinedGrey} alt="heart outlined icon" />
                    </div>
                    <div className={classes?.discount_tag}>-50%</div>
                    <div className={`${classes?.add_to_cart_cta} ${addedToCart && classes?.addAnimation}`} onClick={() => handleAddToCart(product)}>Add to cart</div>
                </div>
                <div className={classes?.product_details}>
                    <div className={classes?.ratings}></div>
                    <div className={classes?.product_name}>{product?.product_name}</div>
                    <div className={classes?.price_block}>
                        {false && <div className={classes?.discounted_price}></div>}
                        <div className={classes?.actual_price}>${product?.price}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard