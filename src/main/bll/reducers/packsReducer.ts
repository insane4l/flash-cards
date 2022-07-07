import {BaseThunkType, InferActionsTypes} from "../store";

import {DataGetPacksType, DataUpdatePackType, packsAPI, PackType} from "../../api/packListAPI";
import axios, {AxiosError} from "axios";
import {appActions} from "./appReducer";

const initialState = {
    cardPacks: [] as PackType[],
    page: 1,
    pageCount: 5,
    cardPacksTotalCount: 0,
    minCardsCount: 0,
    maxCardsCount: 0,
    token: '',
    tokenDeathTime: 0,
}


export const packsReducer = (
    state: PacksStateType = initialState,
    action: PacksActionsTypes
): PacksStateType => {
    switch (action.type) {
        case "packs/SET-PACKS":
            return {
                ...state, ...action.payload
            };
        case "packs/DEL-PACK":
            return {
                ...state,
            };
        case "packs/EDIT-PACK":
            return {
                ...state,
            };


        default:
            return state;
    }
};

//actions
export const packsActions = {
    setPacksList: (cardPacks: PackType[]) => ({type: "packs/SET-PACKS", payload: {cardPacks}} as const),
    deletePack: (packId: string) => ({type: "packs/DEL-PACK", packId} as const),
    editPack: (packId: string, name: string) => ({type: "packs/EDIT-PACK", packId, name} as const)


};

//thunks
export const setMyPacksListTC = (): BaseThunkType<PacksActionsTypes> => async (dispatch, getState) => {
        const _id = getState().profile.userData._id
        const {pageCount, page} = getState().packs
        dispatch(appActions.appSetStatusAC("loading"))

        try {
            const res = await packsAPI.getPacks({
                pageCount, page, user_id: _id
            })

            dispatch(packsActions.setPacksList(res.cardPacks))
            dispatch(appActions.appSetStatusAC("succeeded"))

//type from valera
        } catch (e) {
            const err = e as Error | AxiosError<{ error: string }>
            if (axios.isAxiosError(err)) {
                const error = err.response?.data ? err.response.data.error : err.message
                //dispatch(profileActions.setErrorMessage(error))
            } else {
                //dispatch(profileActions.setErrorMessage(`Native error ${err.message}`))
            }
            // dispatch(profileActions.setErrorMessage(e.response.data.error || e.message))
        }
    }
;
export const setPacksListTC = (): BaseThunkType<PacksActionsTypes> => async (dispatch, getState) => {

        const {pageCount, page} = getState().packs
        dispatch(appActions.appSetStatusAC("loading"))

        try {
            const res = await packsAPI.getPacks({
                pageCount, page, user_id: ''
            })


            dispatch(packsActions.setPacksList(res.cardPacks))
            dispatch(appActions.appSetStatusAC("succeeded"))

//type from valera
        } catch (e) {
            const err = e as Error | AxiosError<{ error: string }>
            if (axios.isAxiosError(err)) {
                const error = err.response?.data ? err.response.data.error : err.message
                //dispatch(profileActions.setErrorMessage(error))
            } else {
                //dispatch(profileActions.setErrorMessage(`Native error ${err.message}`))
            }
            // dispatch(profileActions.setErrorMessage(e.response.data.error || e.message))
        }
    }
;
export const deletePackTC =
        (packId: string): BaseThunkType<PacksActionsTypes> => async (dispatch) => {
            dispatch(appActions.appSetStatusAC("loading"))

            try {
                await packsAPI.deletePack(packId)
                dispatch(setMyPacksListTC())


                dispatch(appActions.appSetStatusAC("succeeded"))

//type from valera
            } catch (e) {
                const err = e as Error | AxiosError<{ error: string }>
                if (axios.isAxiosError(err)) {
                    const error = err.response?.data ? err.response.data.error : err.message
                    //dispatch(profileActions.setErrorMessage(error))
                } else {
                    //dispatch(profileActions.setErrorMessage(`Native error ${err.message}`))
                }
                // dispatch(profileActions.setErrorMessage(e.response.data.error || e.message))
            }
        }
;
export const editPackTC =
        (packId: string, name: string): BaseThunkType<PacksActionsTypes> => async (dispatch) => {
            dispatch(appActions.appSetStatusAC("loading"))

            try {
                await packsAPI.updatePack(packId, name)
                dispatch(setMyPacksListTC())
                dispatch(appActions.appSetStatusAC("succeeded"))

//type from valera
            } catch (e) {
                const err = e as Error | AxiosError<{ error: string }>
                if (axios.isAxiosError(err)) {
                    const error = err.response?.data ? err.response.data.error : err.message
                    //dispatch(profileActions.setErrorMessage(error))
                } else {
                    //dispatch(profileActions.setErrorMessage(`Native error ${err.message}`))
                }
                // dispatch(profileActions.setErrorMessage(e.response.data.error || e.message))
            }
        }
;
// export const learnPackTC =
//         (packId: string): BaseThunkType<PacksActionsTypes> => async (dispatch) => {
//             dispatch(appActions.appSetStatusAC("loading"))
//             await packsAPI.learnPack(packId)
//             try {
//
//                 dispatch(setMyPacksListTC())
//                 dispatch(appActions.appSetStatusAC("succeeded"))
//
// //type from valera
//             } catch (e) {
//                 const err = e as Error | AxiosError<{ error: string }>
//                 if (axios.isAxiosError(err)) {
//                     const error = err.response?.data ? err.response.data.error : err.message
//                     //dispatch(profileActions.setErrorMessage(error))
//                 } else {
//                     //dispatch(profileActions.setErrorMessage(`Native error ${err.message}`))
//                 }
//                 // dispatch(profileActions.setErrorMessage(e.response.data.error || e.message))
//             }
//         }
// ;
export const addNewPackTC =
        ( name: string): BaseThunkType<PacksActionsTypes> => async (dispatch) => {
            dispatch(appActions.appSetStatusAC("loading"))
            await packsAPI.addNewPack( name)
            try {

                dispatch(setMyPacksListTC())
                dispatch(appActions.appSetStatusAC("succeeded"))

//type from valera
            } catch (e) {
                const err = e as Error | AxiosError<{ error: string }>
                if (axios.isAxiosError(err)) {
                    const error = err.response?.data ? err.response.data.error : err.message
                    //dispatch(profileActions.setErrorMessage(error))
                } else {
                    //dispatch(profileActions.setErrorMessage(`Native error ${err.message}`))
                }
                // dispatch(profileActions.setErrorMessage(e.response.data.error || e.message))
            }
        }
;
export type PacksStateType = typeof initialState

export type PacksActionsTypes = InferActionsTypes<typeof packsActions> | InferActionsTypes<typeof appActions>