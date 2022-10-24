import { createSlice } from '@reduxjs/toolkit'
import data from '../data'

const slice = createSlice({
	name: 'products',
	initialState: {
		data,
	},
	reducers: {},
})

export const selectUniqueColors = (state) => {
	const colors = state.products.data.map((product) => product.color)
	return Array.from(new Set(colors))
}

export default slice.reducer
