import React from 'react'
import classes from './Footer.module.scss'
import { icons } from '../../assets/imageKeyMapping'

const Footer = () => {
    return (
        <div className={classes?.footer_component}>
            <div className={classes?.top}>
                <img src={icons?.logo} className={classes?.brand_logo} alt="brand logo" />
                <div className={classes?.divider}></div>
                <div className="">Gift & Decoration Store</div>
                <div className={classes?.footer_nav}>
                    <div className={classes?.link}>Home</div>
                    <div className={classes?.link}>Shop</div>
                    <div className={classes?.link}>Product</div>
                    <div className={classes?.link}>Contact Us</div>
                </div>
            </div>
            <div className={classes?.bottom}>
                <div className="">Copyright © 2023 3legant. All rights reserved</div>
                <div className={classes?.bold}>Privacy Policy</div>
                <div className={classes?.bold}>Terms of Use</div>
            </div>
        </div>
    )
}

export default Footer