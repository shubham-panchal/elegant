import React, { useState } from 'react'
import classes from './Login.module.scss'
import { loginImages } from '../../assets/imageKeyMapping'
import SignUp from '../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn'

const Login = () => {
    const [page, setPage] = useState('signin')

    const handlePageChange = (pagename) => {
        setPage(pagename)
    }

    return (
        <div className={classes?.login_container}>
            <div className={classes?.left}>
                <div className={classes?.brand_name}>3legant.</div>
                <img src={loginImages?.loginHeroImage} className={classes?.hero_image} alt='hero image' />
            </div>
            <div className={classes?.right}>
                {page === 'signup' ?
                    <SignUp currentPage={page} onPageChange={handlePageChange} /> :
                    <SignIn currentPage={page} onPageChange={handlePageChange} />}
            </div>
        </div>
    )
}

export default Login