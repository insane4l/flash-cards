import React, {useEffect, useState} from 'react'
import {addNewPackTC} from '../../../../main/bll/reducers/packsReducer'
import {useAppDispatch} from '../../../../main/bll/store'
import SuperButton from '../../../../main/ui/common/SuperButton/SuperButton'
import ModalWindow from "../../../../main/ui/common/ModalWindow/ModalWindow";
import SuperInputText from "../../../../main/ui/common/SuperInputText/SuperInputText";

export const AddNewPack = () => {

    const [newNamePack, setNewNamePack] = useState('')
    const [addPackModal, setAddPackModal] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(true)

    const openAddModal = () => setAddPackModal(true)
    const closeAddModal = () => setAddPackModal(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        (newNamePack === '') ? setBtnDisabled(true) : setBtnDisabled(false)
    }, [newNamePack])
    const addNewPackHandler = () => {
        dispatch(addNewPackTC(newNamePack))

        closeAddModal()  //wtf?
    }

    return (

        <div>

            <ModalWindow open={addPackModal} onClose={closeAddModal} title={' Add new pack'}>

                <SuperInputText value={newNamePack} onChangeText={setNewNamePack} placeholder={'Enter pack name'}/>
                <SuperButton btnStyle="outline_danger" onClick={closeAddModal}>Cancel</SuperButton>
                <SuperButton onClick={addNewPackHandler} disabled={btnDisabled}
                >Save</SuperButton>
            </ModalWindow>
            <SuperButton btnStyle="primary" onClick={openAddModal}> Add pack</SuperButton>
        </div>
    )
}
