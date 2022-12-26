type ud = {
  ur: {
    id: number
    name: string
    email: string
    age: number
  }[]
}

export const UsersAr = ({ ur }: ud) => {
  return (
    <>
      {ur.map((user) => (
        < div className=' p-5 border-4 rounded-3xl border-slate-500 bg-slate-800' >
          <h1 className='text-3xl font-black font-serif capitalize text-center'>
            User info
          </h1>
          <strong className='text-amber-300'>id:</strong>  {user.id} < br />
          <strong className='text-amber-300'>name:</strong> {user.name} < br />
          <strong className='text-amber-300'>Email:</strong> {user.email} < br />
          <strong className='text-amber-300'>age:</strong> {user.age}
        </div >
      ))}
    </>
  )
}