import React, { useState } from 'react'
import moreInfo from '../../../../assets/icons/more_info.svg'
import { useAppSelector } from '../../../../main/bll/store'
import s from './PacksTable.module.css'


export const SearchInfo = () => {

	const authUserId = useAppSelector(state => state.profile.userData._id)
	const cardsTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)
	const searchFilters = useAppSelector(state => state.packs.filters)
	const { packName, min, max, sortPacks, page, pageCount, user_id } = searchFilters

	const infoMessage = `
		Showing ${(user_id === authUserId) ? 'my packs' : 'all users packs'}
		${packName ? ('search for ' + packName) : ''}
		Min cards value ${min}
		Max cards value ${max}
		Page number ${page} of ${Math.ceil(cardsTotalCount / pageCount)}
		Sorted by ${sortPacks ? ' todo: ' : ' todo: '}
	`

	const [displayInfo, setInfoDisplay] = useState(false)

	return (
		<div className={s.infoIconWrapper}>
			<img className={s.infoIcon} src={moreInfo} alt="info" />
			{/* <Popover display={displayInfo} message={infoMessage} /> */}
		</div>
	)
}