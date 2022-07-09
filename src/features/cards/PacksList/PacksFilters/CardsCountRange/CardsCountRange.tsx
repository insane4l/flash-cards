import React, { useMemo } from 'react'
import { packsActions } from '../../../../../main/bll/reducers/packsReducer'
import { useAppDispatch, useAppSelector } from '../../../../../main/bll/store'
import DoubleRange, { DoubleRangeValueType } from '../../../../../main/ui/common/DoubleRange/DoubleRange'

export const CardsCountRange = () => {

	const dispatch = useAppDispatch()
	const minCardsCount = useAppSelector(state => state.packs.filters.min)
	const maxCardsCount = useAppSelector(state => state.packs.filters.max)

	const value = useMemo(() => [minCardsCount, maxCardsCount], [minCardsCount, maxCardsCount]) as DoubleRangeValueType

	const onChangeHandler = (value: DoubleRangeValueType ) => {
		const rangeValues = [...value].sort((a,b) => a-b)
		//@ts-ignore
		dispatch(packsActions.setCardsCountRange(...rangeValues))
	}

	return (
		<DoubleRange onChangeRange={onChangeHandler} value={value} max={110} />
	)
}