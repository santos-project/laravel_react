import { getToday } from '@/common'
// import { usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'

const Create = (props) => {
	// const {errors} = usePage().props
	const initItems = props.items.map((item) => {
		return {
			...item,
			quantity: 0,
		}
	})
	const [items, setItems] = useState(initItems)
	const quantity = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	const [forms, setForms] = useState({
		date: getToday(),
		customer_id: '',
	})

	const hChange = (e) => {
		const { name, value } = e.target

		setForms({
			...forms,
			[name]: value,
		})
	}

	const hChangeItem = (e, itemIndex) => {
		const newItems = [...items]
		newItems[itemIndex].quantity = e.target.value
		setItems(newItems)
		console.log(e.target.value);
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
					{items.map((item, index) => (
						<tr key={index}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>
								<select name='quantity' onChange={(e) => hChangeItem(e, index)}>
									{quantity.map((q, index) => (
										<option value={q} key={index}>
											{q}
										</option>
									))}
								</select>
							</td>
							<td>{item.price * item.quantity}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Create
