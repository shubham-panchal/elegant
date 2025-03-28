import React, { useState, useEffect } from 'react'
import classes from './Cart.module.scss'
import cartImage from '../../assets/images/cart_item.png'
import { useDispatch, useSelector } from 'react-redux'
import { CartActions } from '../../actions/CartActions'

const Cart = ({ onClose }) => {
    const myCart = useSelector(store => store?.cart)
    const [totalCartValue, setTotalCartValue] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        const total = myCart?.reduce((acc, val) => acc += (val?.price * val?.quantity), 0)
        setTotalCartValue(total)
    }, [myCart])

    const handleQuantityChange = (type, product) => {
        if (type === 'increment') {
            dispatch(CartActions?.increaseQuantity(product))
        } else if (type === 'decrement') {
            dispatch(CartActions?.decreaseQuantity(product))
        } else {
            return
        }
    }

    const handleRemoveFromCart = (product) => {
        dispatch(CartActions?.removeFromCart(product))
    }

    return (
        <div className={classes?.cart_component}>
            <div className={classes?.overlay} onClick={onClose}></div>
            <div className={classes?.container}>
                <div className={classes?.title}>Cart</div>
                <div className={classes?.cart_items_wrapper}>
                    {Boolean(myCart?.length) && myCart?.map(item =>
                        <div className={classes?.cart_items} key={item?._id}>
                            <img src={item?.imgURL} className={classes?.item_image} alt="cart item" />
                            <div className={classes?.item_details}>
                                <div className={classes?.item_name}>{item?.product_name}</div>
                                <div className={classes?.item_color}>Color: {item?.color}</div>
                                <div className={classes?.quantity_component}>
                                    <div className={classes?.handles} onClick={() => handleQuantityChange('decrement', item)}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.22925 8H12.5626" stroke="#121212" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={classes?.quantity}>{item?.quantity}</div>
                                    <div className={classes?.handles} onClick={() => handleQuantityChange('increment', item)}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.375 3.33301C8.375 3.1259 8.20711 2.95801 8 2.95801C7.79289 2.95801 7.625 3.1259 7.625 3.33301V7.62469H3.33325C3.12615 7.62469 2.95825 7.79259 2.95825 7.99969C2.95825 8.2068 3.12615 8.37469 3.33325 8.37469H7.625V12.6663C7.625 12.8734 7.79289 13.0413 8 13.0413C8.20711 13.0413 8.375 12.8734 8.375 12.6663V8.37469H12.6666C12.8737 8.37469 13.0416 8.2068 13.0416 7.99969C13.0416 7.79259 12.8737 7.62469 12.6666 7.62469H8.375V3.33301Z" fill="#121212" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className={classes?.pricing_block}>
                                <div className={classes?.price}>${item?.price?.toFixed(2)}</div>
                                <div className={classes?.removeIcon} onClick={() => handleRemoveFromCart(item)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#6C7275" />
                                    </svg>
                                </div>
                            </div>
                        </div>)}
                </div>
                <div className={classes?.checkout_container}>
                    <div className={classes?.subtotal_wrapper}>
                        {/* <div className={classes?.subtotal}>Subtotal</div>
                        <div className={classes?.value}>$99.00</div> */}
                    </div>
                    <div className={classes?.total_wrapper}>
                        <div className={classes?.total}>Total</div>
                        <div className={classes?.value}>${totalCartValue?.toFixed(2)}</div>
                    </div>
                    <div className={classes?.checkout_cta}>Checkout</div>
                </div>
            </div>
        </div>
    )
}

export default Cart