import { Link, usePage } from '@inertiajs/react'

const Index = ({ blogs }) => {
	const { flash } = usePage().props

	return (
		<>
			<div>
				{flash.message && <div className='alert'>{flash.message}</div>}
			</div>
			<ul>
				{blogs.map((blog) => (
					<li key={blog.id}>
						<Link
							href={route('inertia.show', { id: blog.id })}
							className='text-blue-400'>
							タイトル：{blog.title}
						</Link>
						<br />
						本文：{blog.content}
					</li>
				))}
			</ul>
			<p>Inertia Index ページです</p>
		</>
	)
}

export default Index
