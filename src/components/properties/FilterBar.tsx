import { List, Map, Calendar, Gavel } from 'lucide-react';

export default function FilterBar() {
  return (
    <div className='border-t border-b border-gray-200 py-3'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <button className='flex items-center gap-2 border-b-2 border-red-600 pb-1 text-sm font-medium text-red-600'>
              <List className='h-4 w-4' />
              List
            </button>
            <button className='flex items-center gap-2 pb-1 text-sm font-medium text-gray-600 hover:text-gray-900'>
              <Map className='h-4 w-4' />
              Map
            </button>
            <button className='flex items-center gap-2 pb-1 text-sm font-medium text-gray-600 hover:text-gray-900'>
              <Calendar className='h-4 w-4' />
              Inspections
            </button>
            <button className='flex items-center gap-2 pb-1 text-sm font-medium text-gray-600 hover:text-gray-900'>
              <Gavel className='h-4 w-4' />
              Auctions
            </button>
          </div>

          <div className='flex items-center gap-3'>
            <span className='text-sm text-gray-700'>Sort</span>
            <select className='rounded border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none'>
              <option>Featured</option>
              <option>Newest</option>
              <option>Price (High to Low)</option>
              <option>Price (Low to High)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
