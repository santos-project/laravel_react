import { Link } from '@inertiajs/react'
import { useState } from 'react'

export default function InertiaTest() {
	const [values, setValues] = useState({
		title: '',
		content: '',
	})

	const handleChange = (e) => {
		const { title, value } = e.target
		setValues({
			...values,
			[title]: value,
		})
	}

	return (
		<>
			あああ
			<br />
			<Link href='/'>ホームへ</Link>
			<br />
			<Link href={route('inertia.index')}>イナーシャindex</Link>
			<br />
			<Link href={route('inertia.show', { id: 1 })}>イナーシャshow</Link>
			<br />
			<br />
			<div className='mb-8'></div>
			<input
				type='text'
				name='title'
				value={values.title}
				onChange={handleChange}
			/>
			{values.title}
			<Link as='button' method='post' href={route('inertia.store')}></Link>
		</>
	)
}
