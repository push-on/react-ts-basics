type user = {
  n: string
  a: number
  r: boolean
  l: string[]
}

export const User = (p: user) => {
  return (
      <div className='p-5 border-4 rounded-3xl border-slate-500 bg-slate-800'>
        <h1 className='text-3xl font-black font-serif capitalize text-center'>
          User info
        </h1>
        <strong className='text-amber-300'>Name:</strong>  {p.n} <br />
        <strong className='text-amber-300'>Age:</strong> {p.a} <br />
        <strong className='text-amber-300'>Reg:</strong> {p.r ? "True" : "false"} <br />
        <strong className='text-amber-300'>Lang:</strong> {p.l.map(a => `${a}, `)}
    </div>
  )
}