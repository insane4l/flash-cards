import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../../features/auth/Login/Login'
import NewPassword from '../../../features/auth/NewPassword/NewPassword'
import { PasswordRecovery } from '../../../features/auth/PasswordRecovery/PasswordRecovery'
import { PasswordRecoveryInfo } from '../../../features/auth/PasswordRecoveryInfo/PasswordRecoveryInfo'
import Registration from '../../../features/auth/Registration/Registration'
import ComponentsDemo from '../../../features/demo/ComponentsDemo'
import { PATH } from '../../../utils/path'
import {Profile} from '../../../features/profile/Profile'
import Error404 from './Error404/Error404'

export const ROUTES = [
	{ label: '', path: PATH.login, component: <Login /> },
	{ label: 'Registration', path: PATH.registration, component: <Registration /> },
	{ label: 'New Password', path: PATH.newPassword, component: <NewPassword /> },
	{ label: 'Password Recovery', path: PATH.passwordRecovery, component: <PasswordRecovery /> },
	{ label: 'Password Recovery Info', path: PATH.passwordRecoveryInfo, component: <PasswordRecoveryInfo /> },
	{ label: 'Profile', path: PATH.profile, component: <Profile /> },
	{ label: 'Components Demo', path: PATH.componentsDemo, component: <ComponentsDemo /> },
]


const RoutesList = () => {

	const mappedRoutes = ROUTES.map(el => <Route key={el.path} path={el.path} element={el.component} />)

	return (
		<Routes>
			<Route path="/" element={<Navigate to={PATH.profile} />} />

			{mappedRoutes}

			<Route path='*' element={
				<Error404 
					customText='Houston we have a problem! We are lost!'
					backLink={<Link to="/">{"< go back home"}</Link>} />
			} />
		</Routes>
	)
}

export default RoutesList