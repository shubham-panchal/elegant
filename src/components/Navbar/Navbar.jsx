import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.scss'
import { icons } from '../../assets/imageKeyMapping'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [showCart, setShowCart] = useState(false)
    const [totalCartItems, setTotalCartItems] = useState(0)
    const cart = useSelector(store => store?.cart)
    const navigate = useNavigate()
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState(location?.pathname?.split('/')[1])

    useEffect(() => {
        setTotalCartItems(cart?.length)
    }, [cart])

    const toggleCart = () => {
        setShowCart(prev => !prev)
    }

    const handleNavlinksNavigation = (link) => {
        setCurrentPage(link)
        let route = '/home'
        switch (link) {
            case 'shop':
                route = '/shop'
                break
            default:
                route = '/home'
        }
        navigate(route)
    }
    return (
        <>

            <div className={classes?.navbar_container}>
                <img src={icons?.logo} className={classes?.brand_logo} alt="brand logo" />
                <div className={classes?.navlink_wrapper} >
                    <div className={`${classes?.navlink} ${currentPage === 'home' ? classes?.active : ''}`} onClick={() => handleNavlinksNavigation('home')}>Home</div>
                    <div className={`${classes?.navlink} ${currentPage === 'shop' ? classes?.active : ''}`} onClick={() => handleNavlinksNavigation('shop')}>Shop</div>
                    <div className={classes?.navlink}>Product</div>
                    <div className={classes?.navlink}>Contact Us</div>
                </div>
                <div className={classes?.navicons_wrapper}>
                    <div className={classes?.navicon}>
                        <img src={icons?.searchIcon} className={classes?.icon} alt="search icon" />
                    </div>
                    <div className={classes?.navicon}>
                        <img src={icons?.userIcon} className={classes?.icon} alt="user icon" />
                    </div>
                    <div className={classes?.navicon} onClick={toggleCart}>
                        <img src={icons?.shoppingBagIcon} className={classes?.icon} alt="shopping cart" />
                        {totalCartItems > 0 && <div className={classes?.total_bag_items}>{totalCartItems}</div>}
                    </div>
                </div>
            </div>
            {showCart && <div className={classes?.cart_container}>
                <Cart onClose={toggleCart} />
            </div>}
        </>
    )
}

export default Navbar