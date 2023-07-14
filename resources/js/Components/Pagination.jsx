import { Link } from '@inertiajs/react'

export default function Pagination({ links }) {
	console.log({ links })
	return (
		<div className='flex justify-center align-middle'>
			{links.length > 3 && (
				<div className='flex flex-wrap -mb-1'>
					{links.map((link, index) => (
						<div key={index}>
							{link.url === null ? (
								<div
									className='mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded'
									dangerouslySetInnerHTML={{ __html: link.label }}></div>
							) : (
								<Link
									className={
										'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500' +
										(link.active && 'bg-blue-700')
									}
									href={link.url}
									dangerouslySetInnerHTML={{ __html: link.label }}></Link>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
