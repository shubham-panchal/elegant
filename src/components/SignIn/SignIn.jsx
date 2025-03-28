import React from 'react'
import classes from './SignIn.module.scss'
import { icons } from '../../assets/imageKeyMapping'
import Form from '../Form/Form'
import { FORM_FIELDS } from '../../constants/app-constant'

const SignIn = ({ onPageChange }) => {
    const formFields = FORM_FIELDS?.filter(field => field?.fieldname === 'username' || field?.fieldname === 'password')

    return (
        <>
            <div className={classes?.sign_in_container}>
                <div className={classes?.title_block}>
                    <div className={classes?.title}>Sign In</div>
                    <div className={classes?.sub_title}>Don't have an account yet?
                        <span className={classes?.link} onClick={() => onPageChange('signup')}> Sign up</span>
                    </div>
                </div>
                <div className={classes?.form_block}>
                    <Form formFields={formFields} pagetype={'signin'} />
                    {/* <form action="" className={classes?.form}>
                        <div className={classes?.input_wrapper}>
                            <input type="text" className={classes?.input} placeholder='Your username' />
                        </div>
                        <div className={classes?.input_wrapper}>
                            <input type="text" className={classes?.input} placeholder='Password' />
                            <img src={icons?.eyeIcon} className={classes?.icon} alt="show password" />

                        </div>
                        <div className={classes?.cta}>
                            Sign In
                        </div>
                    </form> */}
                </div>
            </div>
        </>
    )
}

export default SignIn