import React, {useEffect, useState} from 'react'
import {addNewPackTC} from '../../../../main/bll/reducers/packsReducer'
import {useAppDispatch} from '../../../../main/bll/store'
import SuperButton from '../../../../main/ui/common/SuperButton/SuperButton'
import ModalWindow from "../../../../main/ui/common/ModalWindow/ModalWindow";
import SuperInputText from "../../../../main/ui/common/SuperInputText/SuperInputText";
import s from './AddNewPack.module.css'

export const AddNewPack = () => {

    const [newPackName, setNewPackName] = useState('')
    const [addPackModal, setAddPackModal] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(true)

    const openAddModal = () => setAddPackModal(true)
    const closeAddModal = () => {
        setAddPackModal(false)
        setNewPackName('')
    }

    const dispatch = useAppDispatch()

    useEffect(() => {
        (newPackName === '') ? setBtnDisabled(true) : setBtnDisabled(false)
    }, [newPackName])


    const addNewPackHandler = () => {
        dispatch(addNewPackTC(newPackName))
            
        closeAddModal()  //wtf? todo: WTF wtf??? .then(() => closeAddModal()) ???
    }

    return (

        <div className={s.wrapper}>

            <ModalWindow open={addPackModal} onClose={closeAddModal} title={' Add new pack'}>

                <SuperInputText value={newPackName} onChangeText={setNewPackName} placeholder={'Enter pack name'}/>
                <SuperButton btnStyle="outline_danger" onClick={closeAddModal}>Cancel</SuperButton>
                <SuperButton onClick={addNewPackHandler} disabled={btnDisabled}
                >Save</SuperButton>
            </ModalWindow>

            <SuperButton className={s.addPackBtn} btnStyle="primary" onClick={openAddModal}>+</SuperButton>
        </div>
    )
}
