import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, usePage } from '@inertiajs/react'

const Index = (props) => {
	const { flash } = usePage().props
	console.log({ flash })

	return (
		<AuthenticatedLayout
			auth={props.auth}
			errors={props.errors}
			header={
				<h2 className='font-semibold text-xl text-gray-800 leading-tight'>
					商品一覧
				</h2>
			}>
			<Head title='商品一覧' />

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
									</div>
									<div className='flex pl-4 my-4 lg:w-2/3 w-full mx-auto'>
										<Link
											as='button'
											href={route('items.create')}
											className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
											商品登録
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
														商品名
													</th>
													<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
														価格
													</th>
													<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
														ステータス
													</th>
												</tr>
											</thead>
											<tbody>
												{props.items.map((item) => (
													<tr key={item.id}>
														<td className='px-4 py-3 border-b-2 border-gray-200 text-blue-400'>
															<Link href={route('items.show', { item: item.id })}>
																{item.id}
															</Link>
														</td>
														<td className='px-4 py-3 border-b-2 border-gray-200'>
															{item.name}
														</td>
														<td className='px-4 py-3 border-b-2 border-gray-200'>
															{item.price}
														</td>
														<td className='px-4 py-3 border-b-2 border-gray-200'>
															{item.is_selling ? '販売中' : '停止中'}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}

export default Index
