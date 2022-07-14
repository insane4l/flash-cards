import React, {FC, useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../main/bll/store";
import {deletePackTC, editPackTC, learnPackTC,} from "../../../../main/bll/reducers/packsReducer";
import {PATH} from "../../../../utils/path";
import s from './PacksTable.module.css'
import {PackType} from '../../../../main/api/packListAPI';
import Spinner from '../../../../main/ui/common/Spinner/Spinner';
import trash from '../../../../assets/icons/delete.png'
import edit from '../../../../assets/icons/edit.svg'
import learn from '../../../../assets/icons/package.png'
import ModalWindow from "../../../../main/ui/common/ModalWindow/ModalWindow";
import SuperButton from "../../../../main/ui/common/SuperButton/SuperButton";
import SuperInputText from "../../../../main/ui/common/SuperInputText/SuperInputText";


export const PacksTable: FC<PacksTablePropsType> = React.memo(({packs, authUserId, isLoading}) => {

    const tableRows = packs.map(pack => (
        <PacksTableRow key={pack._id} pack={pack} isOwner={authUserId === pack.user_id}/>
    ))

    if (isLoading) return <Spinner/>

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 500}} aria-label="custom pagination table">

                <PacksTableHead/>

                <TableBody>
                    {tableRows}
                </TableBody>

            </Table>
        </TableContainer>
    )
})


const PacksTableHead = () => {
    return (
        <TableHead>
            <TableRow style={{backgroundColor: '#F9F9FE'}}>
                <TableCell align="left"> Name</TableCell>
                <TableCell align="center">Total cards</TableCell>
                <TableCell align="center">Last updated</TableCell>
                <TableCell align="center">Created by</TableCell>
                <TableCell align="center">Actions</TableCell>
            </TableRow>
        </TableHead>
    )
}


const PacksTableRow: FC<PacksTableRowPropsType> = ({pack, isOwner}) => {

    const name = pack.name

    const [editModalMode, setEditModalMode] = useState(false)
    const [deleteModalMode, setDeleteModalMode] = useState(false)
    const [newName, setNewName] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)

    const openModal = () => setEditModalMode(true)
    const closeModal = () => setEditModalMode(false)

    const openDelModal = () => setDeleteModalMode(true)
    const closeDelModal = () => setDeleteModalMode(false)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const cardsListPath = PATH.cardsList.replace(/:packId/, '')

    useEffect(() => {
        ( newName===''||newName===name) ? setBtnDisabled(true) : setBtnDisabled(false)
    }, [name, newName])
    const deletePackHandler = (packId: string) => {
        dispatch(deletePackTC(packId))
    }

    const editPackNameHandler = (packId: string) => {
        dispatch(editPackTC(packId, newName))


    }

    const learnPackHandler = (packId: string) => {
        dispatch(learnPackTC(packId));
        navigate(PATH.training + packId);
    }

    return (
        <TableRow key={pack._id}>
            <TableCell component="th" scope="row">
                <NavLink to={cardsListPath + pack._id}>
                    {pack.name}
                </NavLink>
            </TableCell>
            <TableCell style={{width: 170}} align="center">
                {pack.cardsCount}
            </TableCell>
            <TableCell style={{width: 170}} align="center">
                {pack.updated.slice(0, 10)}
            </TableCell>

            <TableCell style={{width: 170}} align="center">
                {pack.user_name}
            </TableCell>
            <TableCell style={{width: 300}} align="center">


                <img className={s.active_icon} src={learn} onClick={() => learnPackHandler(pack._id)}/>
                {isOwner
                    ? <>

                        <img className={s.active_icon} src={edit} onClick={openModal}/>

                        <img className={s.active_icon} src={trash} onClick={openDelModal} alt='delete button'/>
                    </>

                    : undefined}

                <ModalWindow open={editModalMode} onClose={closeModal} title={'Change pack Name'}>
                    <SuperInputText value={newName} onChangeText={setNewName} placeholder={'Enter new pack Name'}/>
                    <SuperButton btnStyle="outline_danger" onClick={closeModal}>Cancel</SuperButton>
                    <SuperButton onClick={() => editPackNameHandler(pack._id)}
                                 disabled={btnDisabled}>Save</SuperButton>
                </ModalWindow>

                <ModalWindow open={deleteModalMode} onClose={closeDelModal} title={'Do you really want to delete pack'}>

                    <SuperButton btnStyle="outline_danger" onClick={closeDelModal}>Cancel</SuperButton>
                    <SuperButton onClick={() => deletePackHandler(pack._id)}
                    >Delete</SuperButton>
                </ModalWindow>

            </TableCell>
        </TableRow>
    )
}


type PacksTablePropsType = {
    packs: PackType[]
    authUserId: string
    isLoading: boolean
}

type PacksTableRowPropsType = {
    pack: PackType
    isOwner: boolean
}