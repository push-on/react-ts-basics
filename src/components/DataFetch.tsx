type DFP = {
  status: 'loading' | 'error' | 'success';
};

export const DataFetch = ({ status }: DFP) => {
  switch (status) {
    case 'loading':
      return <h2 className='text-amber-500'>⏳ Data is loading</h2>;
    case 'error':
      return <h2 className='text-red-500'>⚠️ Error loading data</h2>;
    default:
      return <h2 className='text-green-500'>✅ Data fetched successfully</h2>;
  }
};