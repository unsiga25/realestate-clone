import { List, Map, Calendar, Gavel, Star } from 'lucide-react';

export default function FilterBar() {
  return (
    <div className='top-[121px] z-40 border-b border-gray-200 bg-white'>
      <div className='mx-auto max-w-[1400px] px-4 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <button className='flex items-center gap-2 border-b-2 border-red-600 pb-3 font-medium text-red-600'>
              <List className='h-5 w-5' />
              List
            </button>
            <button className='flex items-center gap-2 pb-3 font-medium text-gray-600 hover:text-gray-900'>
              <Map className='h-5 w-5' />
              Map
            </button>
            <button className='flex items-center gap-2 pb-3 font-medium text-gray-600 hover:text-gray-900'>
              <Calendar className='h-5 w-5' />
              Inspections
            </button>
            <button className='flex items-center gap-2 pb-3 font-medium text-gray-600 hover:text-gray-900'>
              <Gavel className='h-5 w-5' />
              Auctions
            </button>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-sm text-gray-600'>Sort</span>
            <select className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-red-500 focus:outline-none'>
              <option>Featured</option>
              <option>Newest</option>
              <option>Price (High to Low)</option>
              <option>Price (Low to High)</option>
            </select>
            <button className='rounded-lg border border-gray-300 p-2 hover:bg-gray-50'>
              <Star className='h-5 w-5 text-gray-600' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
