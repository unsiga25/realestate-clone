import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/layout/Header';
import Breadcrumb from './components/layout/Breadcrumb';
import SearchBar from './components/layout/Searchbar';
import PropertyGrid from './components/properties/PropertyGrid';
import { MOCK_PROPERTIES } from './data/mockProperties';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const location = 'Cammeray, NSW 2062';
const totalProperties = MOCK_PROPERTIES.length; // Total available properties
const displayedCount = MOCK_PROPERTIES.length; // Currently displayed properties

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <Breadcrumb />
        <SearchBar location={location} />

        {/* MOVE YOUR TITLE + SAVE SEARCH INTO MAIN */}
        <main className='mx-auto max-w-[1400px] px-4 py-6'>
          <div className='mb-6 flex w-full items-center justify-between'>
            <div className='flex w-[68%] justify-between gap-6'>
              <div>
                <h1 className='mb-1 text-xl font-bold text-gray-900'>
                  Real Estate & Property for sale in {location}
                </h1>
                <p className='text-sm text-gray-600'>
                  Showing 1 - {displayedCount} of {totalProperties} properties
                </p>
              </div>

              <button className='flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50'>
                <Star className='h-5 w-5' />
                <span className='font-medium'>Save search</span>
              </button>
            </div>

            <div className='flex cursor-pointer items-center justify-between gap-6 rounded-lg bg-gradient-to-br p-4 shadow-sm transition-shadow hover:shadow-md'>
              <div className='flex items-center gap-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white'>
                  <svg className='h-6 w-6 text-blue-600' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' />
                  </svg>
                </div>
                <div>
                  <div className='text-sm font-medium text-gray-900'>
                    Find out how much it costs to
                  </div>
                  <div className='text-sm font-bold text-gray-900'>buy in Cammeray</div>
                </div>
              </div>
              <svg
                className='h-5 w-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </div>

          <PropertyGrid />
        </main>
      </div>
    </QueryClientProvider>
  );
}

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
      />
    </svg>
  );
}
