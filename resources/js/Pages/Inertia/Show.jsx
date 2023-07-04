import { router } from '@inertiajs/react'

const Show = ({ id, blog }) => {
	// console.log(props);

	const deleteConfirm = (id) => {
		router.delete(`/inertia/${id}`, {
			onBefore: () => confirm('本当に削除しますか？'),
		})
		// console.log(id);
	}

	return (
		<>
			<p>Show パラメータ {blog.id}</p>
			<p>{id}</p>
			<p>{blog.id}</p>
			<p>{blog.title}</p>
			<button onClick={() => deleteConfirm(blog.id)}>削除</button>
		</>
	)
}

export default Show
