import React from 'react';
import SuperButton from "../../main/ui/common/SuperButton/SuperButton";
import {useAppDispatch, useAppSelector} from "../../main/bll/store";
import {addNewPackTC, setMyPacksListTC, setPacksListTC} from "../../main/bll/reducers/packsReducer";
import {PacksTableList} from "./PacksTable";
import Spinner from "../../main/ui/common/Spinner/Spinner";

const PackList = () => {
    const isLoading = useAppSelector(state => state.app.status)
    const dispatch = useAppDispatch()
    const showMyPacksHandler=()=>{
        dispatch(setMyPacksListTC())
    }
    const showAllPacksHandler=()=>{
        dispatch(setPacksListTC())
    }
    const addNewPackHandler=()=>{
        dispatch(addNewPackTC('name'))
    }
    return (
        <div>
            <SuperButton onClick={showMyPacksHandler}> My Packs</SuperButton>
            <SuperButton onClick={showAllPacksHandler}> All Packs</SuperButton>
            <SuperButton onClick={addNewPackHandler}> Add pack</SuperButton>
            <PacksTableList/>
            {isLoading === 'loading' && <Spinner/>}
        </div>
    );
};

export default PackList;