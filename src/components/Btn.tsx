// Sending React Node into props as children
type btnProps = {
  children: React.ReactNode
}
export const Btn = (props:btnProps) => {
  return <button className='p-2 border-4 border-blue-500 rounded-xl w-40'>
    {props.children}
  </button>
}