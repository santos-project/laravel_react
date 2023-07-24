import { getToday } from '@/common'
import { usePage } from '@inertiajs/react'
import { useState } from 'react'

const Create = () => {
  const {errors} = usePage().props
  
	const [forms, setForms] = useState({
		date: getToday(),
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
			<input type='date' name='date' value={forms.date} onChange={hChange} />
		</div>
	)
}

export default Create
