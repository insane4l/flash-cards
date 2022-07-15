import React, { FC, useState } from 'react'
import edit from '../../../../../../assets/icons/edit.svg'
import { editPackTC } from '../../../../../../main/bll/reducers/packsReducer'
import { useAppDispatch } from '../../../../../../main/bll/store'
import ModalWindow from '../../../../../../main/ui/common/ModalWindow/ModalWindow'
import SuperButton from '../../../../../../main/ui/common/SuperButton/SuperButton'
import SuperInputText from '../../../../../../main/ui/common/SuperInputText/SuperInputText'
import s from '../PacksActions.module.css'

export const EditPack: FC<EditPackPropsType> = ({packName, packId}) => {

    const dispatch = useAppDispatch()

    const [editModalMode, setEditModalMode] = useState(false)
    const [newName, setNewName] = useState('')
 
    
    const openModal = () => setEditModalMode(true)
    const closeModal = () => {
        setEditModalMode(false)
        setNewName('')
    }

    const editPackNameHandler = () => {
        dispatch(editPackTC(packId, newName))
    }


    return (
        <>
            <img className={s.action_icon} src={edit} onClick={openModal} alt='edit' />

            <ModalWindow open={editModalMode} onClose={closeModal} title={'Change pack Name'}>
                <SuperInputText value={newName} onChangeText={setNewName} placeholder={'Enter new pack Name'}/>
                <SuperButton btnStyle="outline_danger" onClick={closeModal}>Cancel</SuperButton>
                <SuperButton onClick={editPackNameHandler}
                                disabled={(newName === '' || newName === packName)}>Save</SuperButton>
            </ModalWindow>
        </>
    )
}


type EditPackPropsType = {
    packName: string
    packId: string
}