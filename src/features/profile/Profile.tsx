import React from 'react'
import {useAppDispatch, useAppSelector} from "../../main/bll/store";
import user from "../../assets/images/user.png"
import {Navigate} from "react-router-dom";
import {PATH} from "../../main/ui/routes/RoutesList";
import SuperInputText from "../../main/ui/common/SuperInputText/SuperInputText";
import style from '../profile/Profile.module.css'
import {updateUserInfoTC} from "../../main/bll/reducers/profileReducer";

const Profile = () => {

    const dispatch = useAppDispatch();

    const name = useAppSelector(state => state.login.name)
    const avatar = useAppSelector(state => state.login.avatar)
    const email = useAppSelector(state => state.login.email)
    const isLoggedIn = useAppSelector(state => state.login._id)

const save=()=>{dispatch(updateUserInfoTC('fdfd',''))}



    if (!isLoggedIn) return <Navigate to={PATH.login}/>
    return (
        <div className={style.container}>
            User information
            <div className={style.avatar}>
                {!avatar
                    ? <img src={user}/>
                    : <img src={avatar} style={{width: '50px', height: '50px', borderRadius: '50%'}}/>}
            </div>

<button onClick={save}>Save</button>
            <SuperInputText value={name} />
            <SuperInputText value={email}/>

        </div>
    )
}

export default Profile