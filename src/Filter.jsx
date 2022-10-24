import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUniqueColors } from './store/products'

export function Filter() {
	const [minPrice, setMinPrice] = useState('')
	const [maxPrice, setMaxPrice] = useState('')

	const colors = useSelector(selectUniqueColors)

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
					<input type="checkbox" value={color} />
					{color}
				</label>
			))}
		</>
	)
}
