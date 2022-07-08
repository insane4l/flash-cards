import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../../main/bll/store'
import { PATH } from '../../../utils/path'
import s from './CardsList.module.css'

export const CardsList = () => {

	const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)


	if (!isLoggedIn) return <Navigate to={PATH.login}/>

	return (
		<div>CardsList</div>
	)
}