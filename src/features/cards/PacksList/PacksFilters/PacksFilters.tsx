import React from 'react'
import { packsActions } from '../../../../main/bll/reducers/packsReducer'
import { useAppDispatch, useAppSelector } from '../../../../main/bll/store'
import SuperButton from '../../../../main/ui/common/SuperButton/SuperButton'
import { SearchForm } from '../../SearchForm/SearchForm'
import s from './PacksFilters.module.css'

export const PacksFilters = () => {

	const dispatch = useAppDispatch()
	const authUserId = useAppSelector(state => state.profile.userData._id)

	const onShowAuthUserPacks = () => {
		// todo: push authUserId to URL
		// and reed(set to state) this params on componentDidMount
        dispatch(packsActions.setPackOwnerId(authUserId))
    }
    const onShowAllUsersPacks = () => {
        dispatch(dispatch(packsActions.setPackOwnerId('')))
    }


	return (
		<div className={s.packBlock}>
			<SearchForm />
			<div className={s.btn}>
				<SuperButton onClick={onShowAuthUserPacks}> My Packs</SuperButton>
				<SuperButton onClick={onShowAllUsersPacks}> All Packs</SuperButton>
			</div>
			{/* <DoubleRange min={} max={}/> */}
		</div>
	)
}