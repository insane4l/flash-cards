import React, { FC } from 'react';
import s from "./Login.module.css";
import SuperInputText from "../../../main/ui/common/SuperInputText/SuperInputText";
import SuperCheckbox from "../../../main/ui/common/SuperCheckbox/SuperCheckbox";
import { NavLink } from "react-router-dom";
import { PATH } from '../../../utils/path';
import SuperButton from "../../../main/ui/common/SuperButton/SuperButton";
import { useFormik } from "formik";
import { loginTC } from "../../../main/bll/reducers/loginReducer";
import { useAppDispatch } from "../../../main/bll/store";
import { validateField } from '../../../utils/fieldValidators';


export const LoginForm: FC<LoginFormPropsType> = React.memo( ({isLoading}) => {

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            validateField.required(values.email, errors, 'email');
            validateField.isEmail(values.email, errors, 'email');

            validateField.required(values.password, errors, 'password');
			validateField.minLength(values.password, errors, 'password', 8);

            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values.email, values.password, values.rememberMe));

        },
    })

    const emailError = (formik.errors.email && formik.touched.email) ? formik.errors.email : ''
	const passwordError = (formik.errors.password && formik.touched.password) ? formik.errors.password : ''

    return (
        <>
            <form className={s.loginForm} onSubmit={formik.handleSubmit}>
                <SuperInputText
                    className={s.input}
                    label='Email'
                    error={emailError}
                    {...formik.getFieldProps('email')}
                />

                <SuperInputText
                    passwordType 
                    className={s.input}
                    label='Password'
                    error={passwordError}
                    {...formik.getFieldProps('password')}
                />

                <div className={s.forgotPass}>
                    <NavLink to={PATH.passwordRecovery}>
                        Lost your&nbsp;<span className={s.lostPassword}>password</span>?
                    </NavLink>
                </div>
                <div className={s.rememberLoginBlock}>

                    <SuperCheckbox 
                        spanClassName={s.rememberMe} 
                        {...formik.getFieldProps('rememberMe')}>

                        Remember me
                    </SuperCheckbox>

                    <SuperButton type='submit' disabled={isLoading} btnStyle='primary' className={s.submit}>
                        Login
                    </SuperButton>
                </div>
            </form>
        </>
    );
})


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

type LoginFormPropsType = {
    isLoading: boolean
}