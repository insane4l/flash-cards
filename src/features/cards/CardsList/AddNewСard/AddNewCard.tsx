import React from 'react'
import {useAppDispatch, useAppSelector} from '../../../../main/bll/store'
import SuperButton from '../../../../main/ui/common/SuperButton/SuperButton'
import {addCardTC} from "../../../../main/bll/reducers/cardsReducer";
import {NewCardDataType} from "../../../../main/api/cardsAPI";

export const AddNewCard = () => {
     const id = useAppSelector(state => state.packs.selectedPackId)
    const dispatch = useAppDispatch()

    const addNewCardHandler = () => {
        const newCard: NewCardDataType = {
            cardsPack_id: id,
            question: '',
            answer: ''
        }
        dispatch(addCardTC(newCard))
    }

    return (
        <div>

            <SuperButton btnStyle="primary" onClick={addNewCardHandler}> + new card</SuperButton>
        </div>
    )
}