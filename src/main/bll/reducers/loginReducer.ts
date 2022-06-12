import { BaseThunkType, InferActionsTypes } from "../store"

const initialState = {

}

const loginReducer = (state: LoginStateType = initialState, action: LoginActionsTypes): LoginStateType => {
    switch(action.type) {
        // case 'some_action_type':
        //     return {
        //         ...state,
                
        //     }


        default: return state
    }
}




export const loginActions = {
    someAction: () => (
        {type: 'someType'} as const
    ),
}


// export const someThunk = (): BaseThunkType<LoginActionsTypes> => async (dispatch) => {
//     await dispatch(...)
//     dispatch(...)
// }



export default loginReducer

type LoginStateType = typeof initialState
export type LoginActionsTypes = InferActionsTypes<typeof loginActions>