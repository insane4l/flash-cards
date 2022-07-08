import React, {useEffect} from 'react';
import {Grid} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../main/bll/store";
import {deletePackTC, editPackTC, learnPackTC, setPacksListTC} from "../../main/bll/reducers/packsReducer";
import SuperButton from "../../main/ui/common/SuperButton/SuperButton";
import {PATH} from "../../utils/path";

export const PacksTableList = React.memo(() => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const packs = useAppSelector(state => state.packs.cardPacks)
    const userId = useAppSelector(state => state.profile.userData._id)
    useEffect(() => {
        dispatch(setPacksListTC())
    }, [])

    const deletePackHandler = (packId: string) => {
        dispatch(deletePackTC(packId))

    }
    const editPackNameHandler = (packId: string, name: string) => {
        dispatch(editPackTC(packId, 't'))
        return <Navigate to={'/cards'}/>
    }
    const learnPackHandler = (packId: string) => {
        dispatch(learnPackTC(packId));
        navigate(PATH.training + packId);
    }

    return (
        <Grid container justifyContent={'center'}>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 500}} aria-label="custom pagination table">
                        <TableBody>
                            <TableRow>
                                <TableCell align="center"> Name</TableCell>
                                <TableCell align="center">Total cards</TableCell>
                                <TableCell align="center">Last updated</TableCell>
                                <TableCell align="center">Created by</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>

                            {packs.map((pack) => {
                                return <TableRow key={pack._id}>
                                    <TableCell component="th" scope="row" style={{width: 200}}>
                                        <NavLink to={PATH.cardsList + pack._id}>
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
                                        {userId === pack.user_id ?
                                            <SuperButton btnStyle="danger" onClick={() => {
                                                deletePackHandler(pack._id)
                                            }}>Delete</SuperButton> : undefined}

                                        {userId === pack.user_id ?
                                            <SuperButton btnStyle="primary" onClick={() => {
                                                editPackNameHandler(pack._id, pack.name)
                                            }}>Edit</SuperButton> : undefined}

                                        <SuperButton btnStyle="success"
                                                     onClick={() => learnPackHandler(pack._id)}
                                        >Learn</SuperButton>

                                    </TableCell>
                                </TableRow>
                            })}
                        </TableBody>

                    </Table>
                </TableContainer>
            </div>
        </Grid>
    );
})