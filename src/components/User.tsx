type user = {
  n: string
  a: number
  r: boolean
  l: string[]
}

export const User = (p: user) => {
  return (
    <div className='p-5 border-4 rounded-3xl border-slate-500 bg-slate-800'>
      <h1 className='font-serif text-center'>
        User info
      </h1>
      <strong>Name:</strong>  {p.n} <br />
      <strong>Age:</strong> {p.a} <br />
      <strong>Reg:</strong> {p.r ? "True" : "false"} <br />
      <strong>Lang:</strong> {p.l.map(a => `${a}, `)}
    </div>
  )
}