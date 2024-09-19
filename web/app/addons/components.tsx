import Link from 'next/link'
import type { Addon } from './types'

export function Addons({ addons }: { addons: Addon[] }) {
  return (
    <div className='grid grid-cols-3 gap-2 m-auto items-stretch'>
      {addons.map((addon) => (
        <Link
          href={`/addons/${addon.id}`}
          key={addon.id}
          className='border border-gray-300 rounded-md p-2 hover:bg-gray-100 overflow-hidden overflow-ellipsis h-full min-h-[100px] flex items-center justify-center'
        >
          {addon.name['en-US']}
        </Link>
      ))}
    </div>
  )
}
