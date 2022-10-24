import { createSlice } from '@reduxjs/toolkit'
import data from '../data'

const slice = createSlice({
	name: 'products',
	initialState: {
		data,
		filters: {
			colors: [],
			price: {
				min: 0,
				max: 0,
			},
		},
	},
	reducers: {
		changeFilters(state, action) {
			state.filters[action.payload.name] = action.payload.value
		},
	},
})

export const selectUniqueColors = (state) => {
	const colors = state.products.data.map((product) => product.color)
	return Array.from(new Set(colors))
}

const filterColors = (colors) => (product) =>
	!colors.length || colors.includes(product.color)

const filterPrices = (price) => (product) =>
	(!price.min || product.price >= price.min) &&
	(!price.max || product.price <= price.max)

export const filters = ({ products }) => {
	const { data, filters } = products
	return data.filter(filterColors(filters.colors)).filter(filterPrices(filters.price))
}

export const { changeFilters } = slice.actions

export default slice.reducer
