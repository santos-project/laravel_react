import { getToday } from '@/common'
import { forEach, values } from 'lodash'
// import { usePage } from '@inertiajs/react'
import { useRef, useState } from 'react'

const Create = (props) => {
	// const {errors} = usePage().props
	console.log(props)

	const quantity = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	const [forms, setForms] = useState({
		date: getToday(),
		customer_id: '',
		quantity: quantity[0],
	})

	const hChange = (e) => {
		const { name, value } = e.target
		setForms({
			...forms,
			[name]: value,
		})
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
					{props.items.forEach((item) => (
						// <tr key={item.id}>
						// 	<td>{item.id}</td>
						// 	<td>{item.name}</td>
						// 	<td>{item.price}</td>
						// 	<td>
						// 		<select name='quantity' onChange={hChange}>
						// 			{quantity.map((q) => (
						// 				<option value={q} key={q}>
						// 					{q}
						// 				</option>
						// 			))}
						// 		</select>
						// 	</td>
						// 	<td>{item.price * forms.quantity}</td>
						// </tr>
            console.log(item)
            // <div>id:{item.id}</div>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Create
