import { Heart, Bed, Bath, Car, Calendar, Gavel } from 'lucide-react';
import type { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const isAuction = property.id === 1; // First property is auction

  return (
    <div className='group cursor-pointer overflow-hidden rounded-lg bg-white transition-shadow hover:shadow-xl'>
      <div className='relative'>
        <img
          src={property.image}
          alt={property.address}
          className='h-[280px] w-full object-cover'
        />
        <button className='absolute top-3 right-3 rounded-full bg-white/90 p-2 backdrop-blur-sm transition-colors hover:bg-white'>
          <Heart className='h-5 w-5 text-gray-700' />
        </button>

        {/* Agency Logo */}
        <div className='absolute top-3 left-3 rounded bg-yellow-400 px-3 py-1'>
          <span className='text-sm font-bold'>Ray White</span>
        </div>

        {/* Agent Badge */}
        <div className='absolute right-3 bottom-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm'>
          <img
            src={property.agent.avatar}
            alt={property.agent.name}
            className='h-8 w-8 rounded-full'
          />
          <span className='text-sm font-medium'>Anthony Cowie</span>
        </div>

        {/* Video Badge */}
        {property.id === 1 && (
          <div className='absolute bottom-3 left-3 flex items-center gap-1 rounded bg-gray-900/80 px-2 py-1 text-xs text-white backdrop-blur-sm'>
            <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M8 5v14l11-7z' />
            </svg>
          </div>
        )}
      </div>

      <div className='p-4'>
        {isAuction && (
          <div className='mb-2'>
            <span className='inline-block rounded bg-red-600 px-2 py-1 text-xs font-bold text-white'>
              Auction Guide {property.price}
            </span>
          </div>
        )}

        {!isAuction && (
          <div className='mb-2 text-2xl font-bold text-gray-900'>{property.price}</div>
        )}

        <div className='mb-2'>
          <div className='font-medium text-gray-900'>{property.address}</div>
          <div className='text-sm text-gray-600'>{property.suburb}</div>
        </div>

        <div className='mb-3 flex items-center gap-3 text-gray-700'>
          <div className='flex items-center gap-1'>
            <Bed className='h-5 w-5' />
            <span className='text-sm font-medium'>{property.beds}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Bath className='h-5 w-5' />
            <span className='text-sm font-medium'>{property.baths}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Car className='h-5 w-5' />
            <span className='text-sm font-medium'>{property.parking}</span>
          </div>
          <span className='text-sm text-gray-600'>• {property.propertyType}</span>
        </div>

        {isAuction && (
          <div className='flex items-center gap-4 border-t border-gray-200 pt-3 text-sm'>
            <div className='flex items-center gap-1 text-gray-700'>
              <Calendar className='h-4 w-4' />
              <span>Inspection Sat 22 Nov 10:00 am</span>
            </div>
            <div className='flex items-center gap-1 text-gray-700'>
              <Gavel className='h-4 w-4 text-red-600' />
              <span>Auction Thu 4 Dec 5:00 pm</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
