import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router, usePage } from '@inertiajs/react'
import { useState } from 'react'

const Create = (props) => {
	// const { errors } = usePage().props

	const [forms, setForms] = useState({
		name: '',
		memo: '',
		price: '',
	})

	const hChange = (e) => {
		const { name, value } = e.target
		setForms({
			...forms,
			[name]: value,
		})
	}

	const storeItem = (e) => {
		e.preventDefault()
		router.post('/items', forms)
	}

	return (
		<AuthenticatedLayout
			auth={props.auth}
			errors={props.errors}
			header={
				<h2 className='font-semibold text-xl text-gray-800 leading-tight'>
					商品登録
				</h2>
			}>
			<Head title='商品登録' />

			<div className='py-12'>
				<div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
					<div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
						<div className='p-6 text-gray-900'>
							<section className='text-gray-600 body-font relative'>
								<form onSubmit={storeItem}>
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
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
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
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
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
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
													</div>
												</div>

												<div className='p-2 w-full'>
													<button type='submit' className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
														登録
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

export default Create
