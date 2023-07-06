import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

const Index = (props, items) => {
	console.log(Object.values(items));
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
									<div className='flex pl-4 my-4 lg:w-2/3 w-full mx-auto'>
										<button className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
											Button
										</button>
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
												<tr>
													{Object.values(items).map((item) => (
														<>
															<td className='px-4 py-3'>{item.id}</td>
															<td className='px-4 py-3'>{item.name}</td>
															<td className='px-4 py-3'>{item.price}</td>
															<td className='px-4 py-3'>{item.is_selling}</td>
														</>
													))}
												</tr>
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
