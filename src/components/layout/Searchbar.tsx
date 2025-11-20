import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className='border-b border-gray-200 bg-white'>
      <div className='mx-auto max-w-[1400px] px-4 py-4'>
        <div className='flex items-center gap-3'>
          <div className='relative flex-1'>
            <Search className='absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400' />
            <input
              type='text'
              placeholder='Cammeray, NSW 2062'
              className='w-full rounded-lg border border-none py-2.5 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none'
              defaultValue='Cammeray, NSW 2062'
            />
          </div>
          <button className='rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium whitespace-nowrap hover:bg-gray-50'>
            Property type
          </button>
          <button className='rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium hover:bg-gray-50'>
            Price
          </button>
          <button className='rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium hover:bg-gray-50'>
            Bed
          </button>
          <button className='flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium hover:bg-gray-50'>
            <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
              />
            </svg>
            Filters
          </button>
          <button className='flex items-center gap-2 rounded-lg border-none px-6 py-2.5 text-sm font-medium hover:bg-gray-50'>
            <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
              />
            </svg>
            Map
          </button>
        </div>
      </div>
    </div>
  );
}
