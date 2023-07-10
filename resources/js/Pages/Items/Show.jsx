import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { nl2br } from '@/common'

const Show = (props) => {
	return (
		<AuthenticatedLayout
			auth={props.auth}
			errors={props.errors}
			header={
				<h2 className='font-semibold text-xl text-gray-800 leading-tight'>
					商品詳細
				</h2>
			}>
			<Head title='商品詳細' />

			<div className='py-12'>
				<div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
					<div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
						<div className='p-6 text-gray-900'>
							<section className='text-gray-600 body-font relative'>
								<form>
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
														<div
															id='name'
															className='w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
															{props.item.name}
														</div>
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='memo'
															className='leading-7 text-sm text-gray-600'>
															メモ
														</label>
														<div
															id='memo'
															dangerouslySetInnerHTML={{
																__html: nl2br(props.item.memo),
															}}
															className='w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'>
														</div>
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='price'
															className='leading-7 text-sm text-gray-600'>
															価格
														</label>
														<div
															id='price'
															className='w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
															{props.item.price}
														</div>
													</div>
												</div>

												<div className='p-2 w-full'>
													<div className='relative'>
														<label
															htmlFor='status'
															className='leading-7 text-sm text-gray-600'>
															価格
														</label>
														<div
															id='status'
															className='w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
															{props.item.is_selling ? '販売中' : '停止中'}
														</div>
													</div>
												</div>

												<div className='p-2 w-full'>
													<button
														type='submit'
														className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
														編集
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

export default Show
