import React from 'react'
import {useAppDispatch, useAppSelector} from '../../../../main/bll/store'
import SuperButton from '../../../../main/ui/common/SuperButton/SuperButton'
import {addCardTC} from "../../../../main/bll/reducers/cardsReducer";
import {NewCardDataType} from "../../../../main/api/cardsAPI";

export const AddNewCard = () => {
    // const _id = useAppSelector(state => state.cards.cardsPack_id)
    const dispatch = useAppDispatch()

    const addNewCardHandler = () => {
        const newCard: NewCardDataType = {
            cardsPack_id: "62d001a826bfe217bce50d1f",
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