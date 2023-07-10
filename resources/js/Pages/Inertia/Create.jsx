import { router, usePage } from '@inertiajs/react'
import { useState } from 'react'

export default function Create() {
	const { errors } = usePage().props
	// console.log({errors});

	const [values, setValues] = useState({
		title: '',
		content: '',
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({
			...values,
			[name]: value,
		})
	}
	const onSubmit = (e) => {
		e.preventDefault()
		// console.log(values)
		router.post('/inertia', values) //URLはweb.phpのルートパスと同じにしないといけない
	}

	return (
		<form onSubmit={onSubmit}>
			<input type='text' name='title' onChange={handleChange} />
      {errors.title && <div>{errors.title}</div>}
			<br />
			<input type='text' name='content' onChange={handleChange} />
      {errors.content && <div>{errors.content}</div>}
			<br />
			<button type='submit'>送信</button>
		</form>
	)
}
