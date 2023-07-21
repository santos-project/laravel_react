import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router, usePage } from '@inertiajs/react'
import KenAll from 'ken-all'
import { useState } from 'react'

const Create = (props) => {
	const { errors } = usePage().props
	// console.log({errors});
	// KenAll('1000004').then((res) => console.log(res))

	const [forms, setForms] = useState({
		name: '',
		kana: '',
		tel: '',
		email: '',
		postcode: '',
		address: '',
		birthday: '',
		gender: '',
		memo: '',
	})

	const hChange = (e) => {
		// const { name, value } = e.target
		const postcode = e.target.name === 'postcode' && e.target.value

		if (postcode.length === 7) {
			KenAll(postcode).then((res) => {
				if (res.length === 0) {
					setForms({
						...forms,
						address: '該当する住所はありません',
					})
				} else {
					setForms({
						...forms,
						address: res[0].join(''),
					})
				}
			})
		}

		const name = e.target.name
		const value = e.target.name === 'postcode' ? postcode : e.target.value
		console.log(value)

		setForms({
			...forms,
			[name]: value,
		})
	}

	const storeCustomer = (e) => {
		e.preventDefault()
		router.post('/customers', forms)
	}

	return (
		<AuthenticatedLayout
			auth={props.auth}
			errors={props.errors}
			header={
				<h2 className='font-semibold text-xl text-gray-800 leading-tight'>
					顧客登録
				</h2>
			}>
			<Head title='顧客登録' />

			<div className='py-12'>
				<div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
					<div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
						<div className='p-6 text-gray-900'>
							<section className='text-gray-600 body-font relative'>
								<form onSubmit={storeCustomer}>
									<div className='container px-5 py-8 mx-auto'>
										<div className='lg:w-1/2 md:w-2/3 mx-auto'>
											<div className='flex flex-wrap -m-2'>
												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='name'
															className='leading-7 text-sm text-gray-600'>
															顧客名
														</label>
														<input
															type='text'
															id='name'
															name='name'
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
															htmlFor='kana'
															className='leading-7 text-sm text-gray-600'>
															フリガナ
														</label>
														<input
															type='text'
															id='kana'
															name='kana'
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
														{errors.kana && (
															<div className='text-red-500 mt-2'>
																{errors.kana}
															</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='tel'
															className='leading-7 text-sm text-gray-600'>
															電話番号
														</label>
														<input
															type='tel'
															id='tel'
															name='tel'
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
														{errors.tel && (
															<div className='text-red-500 mt-2'>
																{errors.tel}
															</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='email'
															className='leading-7 text-sm text-gray-600'>
															メールアドレス
														</label>
														<input
															type='email'
															id='email'
															name='email'
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
														{errors.email && (
															<div className='text-red-500 mt-2'>
																{errors.email}
															</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='postcode'
															className='leading-7 text-sm text-gray-600'>
															郵便番号
														</label>
														<input
															type='number'
															id='postcode'
															name='postcode'
															onChange={hChange}
															maxLength={7}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
														{errors.postcode && (
															<div className='text-red-500 mt-2'>
																{errors.postcode}
															</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='address'
															className='leading-7 text-sm text-gray-600'>
															住所
														</label>
														<input
															type='text'
															id='address'
															name='address'
															value={forms.address}
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
														{errors.address && (
															<div className='text-red-500 mt-2'>
																{errors.address}
															</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='birthday'
															className='leading-7 text-sm text-gray-600'>
															誕生日
														</label>
														<input
															type='date'
															id='birthday'
															name='birthday'
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
														/>
														{errors.birthday && (
															<div className='text-red-500 mt-2'>
																{errors.birthday}
															</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label className='leading-7 text-sm text-gray-600'>
															性別
														</label>
														<input
															type='radio'
															id='men'
															name='gender'
															className='ml-4 mr-2'
															onChange={hChange}
															value={1}
														/>
														<label
															htmlFor='men'
															className='leading-7 text-sm text-gray-600'>
															男性
														</label>
														<input
															type='radio'
															id='women'
															name='gender'
															className='ml-4 mr-2'
															onChange={hChange}
															value={1}
														/>
														<label
															htmlFor='women'
															className='leading-7 text-sm text-gray-600'>
															女性
														</label>
														<input
															type='radio'
															id='other'
															name='gender'
															className='ml-4 mr-2'
															onChange={hChange}
															value={2}
														/>
														<label
															htmlFor='other'
															className='leading-7 text-sm text-gray-600'>
															その他
														</label>

														{errors.gender && (
															<div className='text-red-500 mt-2'>
																{errors.gender}
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
															onChange={hChange}
															className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
														{errors.memo && (
															<div className='text-red-500'>{errors.memo}</div>
														)}
													</div>
												</div>

												<div className='p-2 w-full'>
													<button
														type='submit'
														className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
														顧客登録
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
