import { ChevronRight } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <div className='border-b border-gray-200 bg-white'>
      <div className='mx-auto max-w-[1400px] px-4 py-3'>
        <div className='flex items-center gap-2 text-sm'>
          <a href='#' className='text-gray-700 hover:text-gray-900'>
            Buy
          </a>
          <ChevronRight className='h-4 w-4 text-gray-400' />
          <a href='#' className='text-gray-700 hover:text-gray-900'>
            NSW
          </a>
          <ChevronRight className='h-4 w-4 text-gray-400' />
          <span className='font-medium text-gray-900'>Cammeray</span>
        </div>
      </div>
    </div>
  );
}
