import React from 'react'
import classes from './SignUp.module.scss'
import { FORM_FIELDS } from '../../constants/app-constant'
import Form from '../Form/Form'

const SignUp = ({ onPageChange }) => {
    const formFields = FORM_FIELDS

    return (
        <>
            <div className={classes?.sign_up_container}>
                <div className={classes?.title_block}>
                    <div className={classes?.title}>Sign up</div>
                    <div className={classes?.sub_title}>Already have an account?
                        <span className={classes?.link} onClick={() => onPageChange('signin')}> Sign in</span>
                    </div>
                </div>
                <div className={classes?.form_block}>
                    <Form formFields={formFields} />
                </div>
            </div>
        </>
    )
}

export default SignUp