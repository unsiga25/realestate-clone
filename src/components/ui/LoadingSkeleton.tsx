export default function LoadingSkeleton() {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {[...Array(4)].map((_, i) => (
        <div key={i} className='h-96 animate-pulse rounded-lg bg-gray-200' />
      ))}
    </div>
  );
}
