import {createStore, combineReducers, applyMiddleware, Action} from 'redux'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'

import appReducer, { AppActionsTypes } from "./reducers/appReducer"
import { LoginActionsTypes } from './reducers/loginReducer'
import { CardsActionsTypes } from './reducers/cardsReducer'
import { NewPasswordActionsTypes } from './reducers/newPasswordReducer'
import { PasswordRecoveryActionsTypes } from './reducers/passwordRecoveryReducer'
import { ProfileActionsTypes } from './reducers/profileReducer'
import { RegistrationActionsTypes } from './reducers/registrationReducer'

const rootReducer = combineReducers({
    app: appReducer,

})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export const useAppDispatch = () => useDispatch<DispatchActionType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store
export default store




type AppRootActionsType = AppActionsTypes | LoginActionsTypes | NewPasswordActionsTypes
| PasswordRecoveryActionsTypes | RegistrationActionsTypes | ProfileActionsTypes | CardsActionsTypes 


export type AppRootStateType = ReturnType<typeof rootReducer>
export type DispatchActionType = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>


export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppRootStateType, unknown, A>