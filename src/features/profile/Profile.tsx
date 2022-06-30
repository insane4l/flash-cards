import React, {useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../main/bll/store";
import user from "../../assets/images/user.png"
import {Navigate} from "react-router-dom";
import {PATH} from "../../main/ui/routes/RoutesList";
import SuperInputText from "../../main/ui/common/SuperInputText/SuperInputText";
import {updateUserInfoTC} from "../../main/bll/reducers/profileReducer";
import EditableTextLine from "../../main/ui/common/EditableTextLine/EditableTextLine";
import SuperButton from "../../main/ui/common/SuperButton/SuperButton";
import s from"../profile/Profile.module.css"


const Profile = () => {

    const dispatch = useAppDispatch();

    let name = useAppSelector(state => state.profile.name)
    const avatar = useAppSelector(state => state.profile.avatar)
    const email = useAppSelector(state => state.profile.email)
    const isLoggedIn = useAppSelector(state => state.login._id)


const[value,setValue]=useState(name)
const[newFoto,setNewFoto]=useState(avatar)


    const updateUserInfoHandler=()=>{

        dispatch(updateUserInfoTC(value,newFoto))}

    if (!isLoggedIn) return <Navigate to={PATH.login}/>
    return (
        <div className={s.profileBlock}>
            <h3 className={s.pageTitle}>User information</h3>
            <div className={s.avatar}>
                {avatar
                    ? <img src={user}/>
                    : <img src={avatar} />}
            </div>

            <EditableTextLine  text={value} setNewText={setValue}/>
<div className={s.line} ></div>
            <span className={s.underText}>Nickname</span>
            <EditableTextLine withEditIcon={false} disabled={true} text={email} setNewText={()=>{}}/>
            <div className={s.line} ></div>
            <span className={s.underText} >Email</span>
            <SuperButton className={s.btn} onClick={updateUserInfoHandler}>Save</SuperButton>

        </div>
    )
}

export default Profile