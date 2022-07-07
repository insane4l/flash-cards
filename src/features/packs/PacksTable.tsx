import React, {useCallback, useEffect, useState} from 'react';
import {Grid} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Button from '@mui/material/Button';

import TableFooter from '@mui/material/TableFooter';
import {Navigate, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../main/bll/store";
import {deletePackTC, editPackTC, setPacksListTC} from "../../main/bll/reducers/packsReducer";
import SuperButton from "../../main/ui/common/SuperButton/SuperButton";

export const PacksTableList = React.memo(() => {


    const dispatch = useAppDispatch()
    const packs = useAppSelector(state => state.packs.cardPacks)
    const userId = useAppSelector(state => state.profile.userData._id)
    useEffect(() => {
        dispatch(setPacksListTC())
    }, [])

    const deletePackHandler = (packId: string) => {
        dispatch(deletePackTC(packId))

    }
  const editPackNameHandler=(packId:string,name:string)=>{
        dispatch(editPackTC(packId,'t'))
      return <Navigate to={'/cards'}/>
  }
    // const learnPackHandler=(packId:string)=>{
    //     dispatch()
    //
    // }

    //
    // const learnHandler = (id: string) => {
    //     dispatch(learnPack(id))
    //     navigate( `/train`, {replace: true});
    //     // <Navigate to={'/card'}/> // когда будет готова страница обучения, редиректим сюда
    // }
    //
    // const createNewPackHandler = (payload: PostPackPayloadType) => {
    //     dispatch(createNewPack(payload))
    // }
    //
    // const showHandler = useCallback((id: string) => {
    //     navigate('/mainPage/cards')
    //     dispatch(showPack(id))
    // }, [dispatch, navigate])
    //
    // const [sort, setSort] = useState<SortType>('0updated')
    //
    // const sortHandler = () => {
    //     if(sort === '0updated') {
    //         dispatch(getPacks({
    //             sortPacks: '0updated',
    //             pageCount: 8
    //         }))
    //         setSort('1updated')
    //     } else {
    //         dispatch(getPacks({
    //             sortPacks: '1updated',
    //             pageCount: 8
    //         }))
    //         setSort('0updated')
    //     }
    // }

    // @ts-ignore
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
                                {/*<TableCell align="right" onClick={sortHandler}>Last update</TableCell>*/}
                                <TableCell align="center">Created by</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>

                            {packs.map((pack) => {
                                return <TableRow key={pack._id}>
                                    <TableCell component="th" scope="row">
                                        {pack.name}
                                    </TableCell>
                                    <TableCell style={{width: 170}} align="center">
                                        {pack.cardsCount}
                                    </TableCell>
                                    <TableCell style={{width: 170}} align="center">
                                        {pack.updated.slice(0,10)}
                                    </TableCell>

                                    <TableCell style={{width: 170}} align="center">
                                        {pack.user_name}
                                    </TableCell>
                                    <TableCell style={{width: 300}} align="center">
                                        {userId === pack.user_id ?
                                            <SuperButton btnStyle="danger" onClick={() => {
                                                deletePackHandler(pack._id)
                                            }}>Delete</SuperButton>:undefined}


                                        {userId === pack.user_id ?
                                           <SuperButton btnStyle="primary" onClick={() => {
                                               editPackNameHandler(pack._id,pack.name)
                                           }}>Edit</SuperButton>:undefined}


                                            <SuperButton btnStyle="success"
                                                         // onClick={() => learnPackHandler(pack._id)}
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