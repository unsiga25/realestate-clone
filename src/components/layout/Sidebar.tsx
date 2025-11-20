export default function Sidebar() {
  return (
    <aside className='w-full space-y-4 lg:w-[350px]'>
      {/* Property Showcase - McGrath */}
      <div className='overflow-hidden rounded-lg bg-white shadow-sm'>
        <div className='bg-gray-900 px-3 py-2 text-xs font-bold text-white'>PROPERTY SHOWCASE</div>
        <div className='relative'>
          <img
            src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop'
            alt='Featured Property'
            className='h-48 w-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
          <div className='absolute right-0 bottom-0 left-0 p-4 text-white'>
            <h3 className='mb-1 text-lg font-bold'>
              Tightly Held Residence with Stunning Water Views
            </h3>
            <p className='text-sm'>Inspection Sat 22 Nov</p>
          </div>
        </div>
        <div className='p-4'>
          <div className='flex items-start gap-3'>
            <div className='flex-1'>
              <div className='mb-1 font-bold text-gray-900'>20A The Tor Walk, Castlecrag</div>
              <div className='mb-2 flex items-center gap-3 text-sm text-gray-600'>
                <span className='flex items-center gap-1'>
                  <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                  </svg>
                  5
                </span>
                <span className='flex items-center gap-1'>
                  <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 00-7-7z' />
                  </svg>
                  3
                </span>
                <span className='flex items-center gap-1'>
                  <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M5 17h14v2H5zm7-13C6.48 4 2 6.24 2 9v6h2V9c0-1.66 3.13-3 8-3s8 1.34 8 3v6h2V9c0-2.76-4.48-5-10-5z' />
                  </svg>
                  3
                </span>
                <span className='flex items-center gap-1'>
                  <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z' />
                  </svg>
                  1,053m²
                </span>
                <span>• House</span>
              </div>
              <button className='w-full rounded border border-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-50'>
                View Property
              </button>
            </div>
          </div>
          <div className='mt-4 flex items-center gap-3 border-t border-gray-200 pt-4'>
            <img
              src='https://api.dicebear.com/7.x/avataaars/svg?seed=Craig'
              alt='Agent'
              className='h-12 w-12 rounded-full'
            />
            <div>
              <div className='text-sm font-bold'>Craig Ireson</div>
              <div className='text-xs text-gray-600'>McGrath</div>
            </div>
          </div>
        </div>
      </div>

      {/* Property worth guide */}
      <div className='rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md'>
        <h3 className='mb-2 font-bold text-gray-900'>What's your property worth?</h3>
        <p className='mb-3 text-sm text-gray-600'>Get a guide to the market.</p>
        <button className='flex items-center gap-1 text-sm font-medium text-red-600 hover:underline'>
          Learn more
          <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>
    </aside>
  );
}
