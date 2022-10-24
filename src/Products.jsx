import React from 'react'
import { useSelector } from 'react-redux'
import { filters } from './store/products'

export function Products() {
	const data = useSelector(filters)

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>nome</th>
						<th>cor</th>
						<th>preco</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map(({ id, name, color, price }) => (
							<tr key={id}>
								<td>{name}</td>
								<td>{color}</td>
								<td>
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD',
									}).format(price)}
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	)
}
