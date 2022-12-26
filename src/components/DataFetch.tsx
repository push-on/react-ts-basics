type DFP = {
  status: "loading" | "error" | "success"
}

export const DataFetch = ({ status }: DFP) => {
  switch (status) {
    case "loading":
      return <h2 className='text-2xl p-2 border-4 rounded-2xl border-amber-500 bg-amber-500/20 capitalize'>Data is loading</h2>
    case "error":
      return <h2 className='text-2xl p-2 border-4 rounded-2xl border-red-500 bg-red-500/20 capitalize'>Error loading data</h2>
    default:
      return <h2 className='text-2xl p-2 border-4 rounded-2xl border-green-500 bg-green-500/20 capitalize'>Data fetched successfully</h2>
  }
}