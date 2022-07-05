import React, {useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../main/bll/store";
import {Navigate} from "react-router-dom";
import {PATH} from "../../main/ui/routes/RoutesList";
import {updateUserInfoTC} from "../../main/bll/reducers/profileReducer";
import EditableTextLine from "../../main/ui/common/EditableTextLine/EditableTextLine";
import SuperButton from "../../main/ui/common/SuperButton/SuperButton";
import s from "../profile/Profile.module.css"
import Spinner from "../../main/ui/common/Spinner/Spinner";
import user from "../../assets/images/user.png"


export const Profile = () => {

    const dispatch = useAppDispatch();

    const {name, avatar, email} = useAppSelector(state => state.profile.userData)
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const isLoading = useAppSelector(state => state.profile.loading)


    const [value, setValue] = useState(name)
    const [newFoto, setNewFoto] = useState<string | null>(avatar)
    const [error, setError] = useState<string | null>(null)


    const updateUserInfoHandler = () => {
        if (value === name) {
            return setError('Enter another name')
        }
        setNewFoto('')

        dispatch(updateUserInfoTC(value, newFoto))
    }

    if (!isLoggedIn) return <Navigate to={PATH.login}/>
    return (
        <div className={s.profileBlock}>
            <h3 className={s.pageTitle}>User information</h3>
            <div className={s.avatar}>

                {avatar ? <img src={avatar}/> : <img src={user}/>}


            </div>


            <EditableTextLine text={value} setNewText={setValue}/>
            <div className={s.line}></div>
            <span className={s.underText}>Nickname</span>
            <EditableTextLine withEditIcon={false} disabled={true} text={email} setNewText={() => {
            }}/>
            <div className={s.line}></div>
            <span className={s.underText}>Email</span>
            <SuperButton className={s.btn} onClick={updateUserInfoHandler}>Save</SuperButton>
            {error}
            {isLoading && <Spinner/>}

        </div>
    )
}

