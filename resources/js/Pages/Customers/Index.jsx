import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router, usePage } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'
import { useRef } from 'react'

const Index = (props) => {
	const { flash } = usePage().props
	const search = useRef()

	const searchCustomer = () => {
		router.get(route('customers.index', { search: search.current.value }))
	}

	return (
		<AuthenticatedLayout
			auth={props.auth}
			errors={props.errors}
			header={
				<h2 className='font-semibold text-xl text-gray-800 leading-tight'>
					顧客一覧
				</h2>
			}>
			<Head title='顧客一覧' />

			<div className='py-12'>
				<div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
					<div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
						<div className='p-6 text-gray-900'>
							<section className='text-gray-600 body-font'>
								<div className='container px-5 py-8 mx-auto'>
									<div>
										{flash.status === 'success' && (
											<div className='bg-blue-300 text-white p-3'>
												{flash.message}
											</div>
										)}
										{flash.status === 'update' && (
											<div className='bg-green-400 text-white p-3'>
												{flash.message}
											</div>
										)}
										{flash.status === 'danger' && (
											<div className='bg-red-300 text-white p-3'>
												{flash.message}
											</div>
										)}
									</div>

									<div className='flex my-4 lg:w-2/3 w-full mx-auto'>
										<label
											for='default-search'
											class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
											Search
										</label>
										<div class='relative'>
											<div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
												<svg
													class='w-4 h-4 text-gray-500 dark:text-gray-400'
													aria-hidden='true'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 20 20'>
													<path
														stroke='currentColor'
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
													/>
												</svg>
											</div>
											<input
												type='text'
												id='default-search'
												name='search'
												ref={search}
												className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
												placeholder='Search Mockups, Logos...'
												required
											/>
											<button
												className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
												onClick={searchCustomer}>
												Search
											</button>
										</div>

										{/* <div>
											<input type='text' name='search' ref={search} />
											<button
												className='bg-blue-300 text-white py-2 px-2'
												onClick={searchCustomer}>
												検索
											</button>
										</div> */}

										<Link
											as='button'
											href={route('customers.create')}
											className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
											顧客登録
										</Link>
									</div>

									<div className='lg:w-2/3 w-full mx-auto overflow-auto'>
										<table className='table-auto w-full text-left whitespace-no-wrap'>
											<thead>
												<tr>
													<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
														ID
													</th>
													<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
														氏名
													</th>
													<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
														かな
													</th>
													<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
														電話番号
													</th>
												</tr>
											</thead>
											<tbody>
												{props.customers.data.map((customer) => (
													<tr key={customer.id}>
														<td className='px-4 py-3 border-b-2 border-gray-200 text-blue-400'>
															{customer.id}
														</td>
														<td className='px-4 py-3 border-b-2 border-gray-200'>
															{customer.name}
														</td>
														<td className='px-4 py-3 border-b-2 border-gray-200'>
															{customer.kana}
														</td>
														<td className='px-4 py-3 border-b-2 border-gray-200'>
															{customer.tel}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
								<Pagination
									className='mt-6'
									links={props.customers.links}></Pagination>
							</section>
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}

export default Index
