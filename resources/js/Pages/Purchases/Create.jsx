import { getToday } from '@/common'
import { forEach, set, values } from 'lodash'
// import { usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'

const Create = (props) => {
	// const {errors} = usePage().props

	const quantity = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	const [forms, setForms] = useState({
		date: getToday(),
		customer_id: '',
		items: [],
	})

	console.log(forms)

	useEffect(() => {
		props.items.forEach((item) => {
			const itemList = {
				id: item.id,
				name: item.name,
				price: item.price,
				quantity: 0,
			}

			// setForms([...oldvalue, {items: itemList}])

			console.log(itemList.length)
		})
	}, [])

	const hChange = (e) => {
		const addQuantity = e.target.name === 'quantity' && e.target.value

		const name = e.target.name
		const value = e.target.name === 'quantity' ? addQuantity : e.target.value

		setForms({
			...forms,
			[name]: value,
		})

		if (addQuantity > 0) {
			setForms({
				...forms,
				items: [
					{
						quantity: addQuantity,
					},
				],
			})
		}
	}

	return (
		<div>
			<p>日付</p>
			<input type='date' name='date' value={forms.date} onChange={hChange} />

			<p>会員名</p>
			<select name='customer_id' onChange={hChange}>
				{props.customers.map((customer) => (
					<option value={customer.id} key={customer.id}>
						{customer.id} : {customer.name}
					</option>
				))}
			</select>

			<p>商品・サービス</p>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>商品名</th>
						<th>金額</th>
						<th>数量</th>
						<th>小計</th>
					</tr>
				</thead>
				<tbody>
					{/* {forms.items.map((item, index) => ( */}
					<tr>
						<td>{forms.items.id}</td>
						<td>{forms.items.name}</td>
						<td>{forms.items.price}</td>
						<td>
							<select name='quantity' onChange={hChange}>
								{quantity.map((q, index) => (
									<option value={q} key={index}>
										{q}
									</option>
								))}
							</select>
						</td>
						<td>{forms.items.price * forms.items.quantity}</td>
					</tr>
					{/* ))} */}
				</tbody>
			</table>
		</div>
	)
}

export default Create
