import React from 'react';
import SuperButton from "../../main/ui/common/SuperButton/SuperButton";
import {useAppDispatch, useAppSelector} from "../../main/bll/store";
import {addNewPackTC, setMyPacksListTC, setPacksListTC} from "../../main/bll/reducers/packsReducer";
import {PacksTableList} from "./PacksTable";
import Spinner from "../../main/ui/common/Spinner/Spinner";
import {FlatProgress} from "../../main/ui/common/FlatProgress/FlatProgress";

const PackList = () => {
    const isLoading = useAppSelector(state => state.app.status)
    const dispatch = useAppDispatch()

    const addNewPackHandler=()=>{
        dispatch(addNewPackTC('name'))
    }
    return (
        <div>

            <SuperButton onClick={addNewPackHandler}> Add pack</SuperButton>
            <PacksTableList/>

        </div>
    );
};

export default PackList;