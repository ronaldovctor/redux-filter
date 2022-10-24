import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilters, selectUniqueColors } from './store/products'

export function Filter() {
	const [minPrice, setMinPrice] = useState('')
	const [maxPrice, setMaxPrice] = useState('')
	const [selectedColors, setSelectedColors] = useState(['azul'])

	// const states = useSelector((state) => state.products)
	// console.log(states)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(changeFilters({ name: 'colors', value: selectedColors }))
	}, [selectedColors, dispatch])

	useEffect(() => {
		dispatch(
			changeFilters({ name: 'price', value: { min: +minPrice, max: +maxPrice } })
		)
	}, [minPrice, maxPrice, dispatch])

	const colors = useSelector(selectUniqueColors)

	function handleChange({ target }) {
		target.checked
			? setSelectedColors([...selectedColors, target.value])
			: setSelectedColors(selectedColors.filter((color) => color !== target.value))
	}

	function handleChecked(color) {
		return selectedColors.includes(color)
	}

	return (
		<>
			<input
				type="number"
				placeholder="Min Price"
				value={minPrice}
				onChange={({ target }) => setMinPrice(target.value)}
			/>
			<input
				type="number"
				placeholder="Max Price"
				value={maxPrice}
				onChange={({ target }) => setMaxPrice(target.value)}
			/>
			{colors.map((color) => (
				<label key={color}>
					<input
						type="checkbox"
						value={color}
						defaultChecked={handleChecked(color)}
						onChange={handleChange}
					/>
					{color}
				</label>
			))}
		</>
	)
}
