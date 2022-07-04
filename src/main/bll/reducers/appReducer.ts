import { authAPI } from "../../api/authAPI"
import { BaseThunkType, InferActionsTypes } from "../store"
import { profileActions } from "./profileReducer"

const initialState = {
    isAppInitialized: false,
    error: '',
}

const appReducer = (state: AppStateType = initialState, action: AppActionsTypes): AppStateType => {

    switch(action.type) {
        case 'fc/appRed/INITIALIZED_SUCCESSFULLY':
            return {
                ...state,
                isAppInitialized: true
            }
        case 'fc/appRed/SET_ERROR_MESSAGE':
            return {
                ...state,
                error: action.errorMessage
            }

        default: return state
    }
}




export const appActions = {
    initializedSuccessfully: () => (
        {type: 'fc/appRed/INITIALIZED_SUCCESSFULLY'} as const
    ),
    setErrorMessage: (errorMessage: string) => (
        {type: 'fc/appRed/SET_ERROR_MESSAGE', errorMessage} as const
    ),
}


export const initializeAppTC = (): BaseThunkType<AppActionsTypes> => async (dispatch) => {

    try {
        const res = await authAPI.authMe()

        if (!res.error) {
            profileActions.setUserData(res)
        }

    } catch(e: any) {
        dispatch(appActions.setErrorMessage(e.response.data.error || e.message))

    } finally {
        dispatch( appActions.initializedSuccessfully() )

    }
}



export default appReducer

type AppStateType = typeof initialState
export type AppActionsTypes = InferActionsTypes<typeof appActions>