import React, { FC, useState } from 'react'
import { deletePackTC } from '../../../../../../main/bll/reducers/packsReducer'
import { useAppDispatch } from '../../../../../../main/bll/store'
import ModalWindow from '../../../../../../main/ui/common/ModalWindow/ModalWindow'
import SuperButton from '../../../../../../main/ui/common/SuperButton/SuperButton'
import trash from '../../../../../../assets/icons/delete.png'
import s from '../PacksActions.module.css'

export const DeletePack: FC<DeletePackPropsType> = ({packId}) => {

    const dispatch = useAppDispatch()
    
    const [deleteModalMode, setDeleteModalMode] = useState(false)
    

    const openDelModal = () => setDeleteModalMode(true)
    const closeDelModal = () => setDeleteModalMode(false)
    
    const deletePackHandler = (packId: string) => {
        dispatch(deletePackTC(packId))
    }

    return (
        <>
            <img className={`${s.action_icon} ${s.action_delete}`} src={trash} onClick={openDelModal} alt='delete' />

            <ModalWindow open={deleteModalMode} onClose={closeDelModal} title={'Do you really want to delete pack'}>

                <SuperButton btnStyle="outline_danger" onClick={closeDelModal}>Cancel</SuperButton>
                <SuperButton onClick={() => deletePackHandler(packId)}
                >Delete</SuperButton>
            </ModalWindow>
        </>
    )
}


type DeletePackPropsType = {
    packId: string
}