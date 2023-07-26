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
		items: { id: '', name: '', price: '', quantity: 0 },
		// quantity: quantity[0],
	})

	console.log(forms)

	const hChange = (e) => {
		const addQuantity = e.target.name === 'quantity' && e.target.value
		// console.log(addQuantity)

		// console.log(e)
		// const { name, value } = e.target
		const name = e.target.name
		const value = e.target.name === 'quantity' ? addQuantity : e.target.value

		setForms({
			...forms,
			[name]: value,
		})

		if (addQuantity > 0) {
			setForms({
				...forms,
				items: {
					quantity: addQuantity,
				},
			})
		}
	}

	useEffect(() => {
		props.items.forEach((item) => {
			item.quantity = forms.items.quantity

			// setForms({
			// 	...forms,
			// 	items: {
			// 		quantity: item.quantity,
			// 	},
			// })
		})
	}, [])

	// const aChange = (e) => {
	// 	setForms({
	// 		...forms,
	// 		items: {
	// 			quantity: forms.quantity,
	// 		},
	// 	})
	// }

	const total = (i) => {
		// const result = i.price * forms.items.quantity

		// return result

		// // let tptalTest = {}
		// for (const element of i) {
		// 	console.log(element);
		// }

		console.log(i)
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
					{props.items.map((item, index) => (
						<tr key={index}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>
								<select name='quantity' onChange={hChange}>
									{quantity.map((q, index) => (
										<option value={q} key={index}>
											{q}
										</option>
									))}
								</select>
							</td>
							<td>{item.price * item.quantity}</td>
							<td>{total(item)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Create
