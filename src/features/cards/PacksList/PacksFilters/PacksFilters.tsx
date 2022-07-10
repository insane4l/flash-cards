import React from 'react'
import { packsActions } from '../../../../main/bll/reducers/packsReducer'
import { useAppDispatch, useAppSelector } from '../../../../main/bll/store'
import SuperButton from '../../../../main/ui/common/SuperButton/SuperButton'
import { CardsCountRange } from './CardsCountRange/CardsCountRange'
import s from './PacksFilters.module.css'
import { PacksOwnerFilter } from './PacksOwnerFilter/PacksOwnerFilter'
import { PacksSearchInput } from './PacksSearchInput/PacksSearchInput'

export const PacksFilters = () => {




	return (
		<div className={s.packBlock}>
			<PacksSearchInput />
			<PacksOwnerFilter />
			<CardsCountRange />
		</div>
	)
}