import React from 'react'
import s from './Error404.module.css'
import astronautImg from '../../../../assets/images/astronaut404.png'

const Error404: React.FC<Error404PropsType> = ({customText}) => {
    return (
        <div className={s.page__wrapper}>
            <img className={s.astronaut_img} src={astronautImg} alt="astronaut_img" />
            <div className={s.callout__text_wrapper}>
                <span className={s.custom_text}>{customText}</span>
                <span className={s.error_text}>Error 404</span>
            </div>
        </div>
    )
}

export default Error404

type Error404PropsType = {
    customText: string
}
