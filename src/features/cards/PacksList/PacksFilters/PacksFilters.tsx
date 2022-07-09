import React from 'react'
import { packsActions } from '../../../../main/bll/reducers/packsReducer'
import { useAppDispatch, useAppSelector } from '../../../../main/bll/store'
import SuperButton from '../../../../main/ui/common/SuperButton/SuperButton'
import { CardsCountRange } from './CardsCountRange/CardsCountRange'
import s from './PacksFilters.module.css'
import { PacksSearchInput } from './PacksSearchInput/PacksSearchInput'

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
			<PacksSearchInput />
			<div className={s.btn}>
				<SuperButton onClick={onShowAuthUserPacks}> My Packs</SuperButton>
				<SuperButton onClick={onShowAllUsersPacks}> All Packs</SuperButton>
			</div>
			<CardsCountRange />
		</div>
	)
}