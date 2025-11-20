import { useProperties } from '../../hooks/useProperties';
import PropertyCard from './PropertyCard';
import LoadingSkeleton from '../ui/LoadingSkeleton';
import Sidebar from '../layout/Sidebar';
import FilterBar from './FilterBar';

export default function PropertyGrid() {
  const { data: properties, isLoading, error } = useProperties();

  if (isLoading) return <LoadingSkeleton />;

  if (error) {
    return (
      <div className='py-12 text-center text-red-600'>
        Error loading properties: {error.message}
      </div>
    );
  }

  return (
    <div className='flex gap-6'>
      {/* Main Content */}

      <div className='flex-1'>
        <div className='grid grid-cols-1 gap-6'>
          <FilterBar />
          {properties?.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className='hidden lg:block'>
        <Sidebar />
      </div>
    </div>
  );
}
