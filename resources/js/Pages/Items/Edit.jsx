import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router, usePage } from '@inertiajs/react'
import { useState } from 'react'

const Edit = (props) => {
	const { errors } = usePage().props
	// console.log({errors});

	const [forms, setForms] = useState({
		id: props.item.id,
		name: props.item.name,
		memo: props.item.memo,
		price: props.item.price,
		is_selling: props.item.is_selling,
	})

	// console.log(forms);

	const hChange = (e) => {
		// const { name, value } = e.target
		const name = e.target.name
		const value =
			e.target.name === 'is_selling' ? Number(e.target.checked) : e.target.value
		setForms({
			...forms,
			[name]: value,
		})
	}

	const updateItem = (e) => {
		e.preventDefault()
		router.put(`/items/${props.item.id}`,  forms)
	}

	return (
		<AuthenticatedLayout
			auth={props.auth}
			errors={props.errors}
			header={
				<h2 className='font-semibold text-xl text-gray-800 leading-tight'>
					商品編集
				</h2>
			}>
			<Head title='商品編集' />

			<div className='py-12'>
				<div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
					<div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
						<div className='p-6 text-gray-900'>
							<section className='text-gray-600 body-font relative'>
								<form onSubmit={updateItem}>
									<div className='container px-5 py-8 mx-auto'>
										<div className='lg:w-1/2 md:w-2/3 mx-auto'>
											<div className='flex flex-wrap -m-2'>
												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='name'
															className='leading-7 text-sm text-gray-600'>
															商品名
														</label>
														<input
															type='text'
															id='name'
															name='name'
															value={forms.name}
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
														{errors.name && (
															<div className='text-red-500 mt-2'>
																{errors.name}
															</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='memo'
															className='leading-7 text-sm text-gray-600'>
															メモ
														</label>
														<textarea
															id='memo'
															name='memo'
															value={forms.memo}
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
														{errors.memo && (
															<div className='text-red-500'>{errors.memo}</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='price'
															className='leading-7 text-sm text-gray-600'>
															価格
														</label>
														<input
															type='number'
															id='price'
															name='price'
															value={forms.price}
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
														{errors.price && (
															<div className='text-red-500 mt-2'>
																{errors.price}
															</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label className='leading-7 text-sm text-gray-600 mr-5'>
															ステータス
														</label>
														<input
															type='checkbox'
															id='is_selling_t'
															name='is_selling'
															checked={forms.is_selling}
															onChange={hChange}
														/>
														<label htmlFor='is_selling_t' className='ml-2 mr-4'>
															{forms.is_selling === 1 ? '販売中' : '停止中'}
														</label>
													</div>
												</div>

												<div className='p-2 w-full'>
													<button
														type='submit'
														className='flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg'>
														更新する
													</button>
												</div>
											</div>
										</div>
									</div>
								</form>
							</section>
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}

export default Edit
