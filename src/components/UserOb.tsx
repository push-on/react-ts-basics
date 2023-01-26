type user = {
  obj: {
    myName: string;
    age: number;
    reg: boolean;
    lang: string[];
  };
};
export const UserOb = (prop: user) => {
  return (
    <div className='p-5 border-4 rounded-3xl border-slate-500 bg-slate-800'>
      <h1 className='text-3xl font-black font-serif capitalize text-center'>
        User info
      </h1>
      <strong className='text-amber-300'>Name:</strong>  {prop.obj.myName} <br />
      <strong className='text-amber-300'>Age:</strong> {prop.obj.age} <br />
      <strong className='text-amber-300'>Reg:</strong> {prop.obj.reg ? "True" : "false"} <br />
      <strong className='text-amber-300'>Lang:</strong> {prop.obj.lang.map(a => `${a}, `)}
    </div>
  );
};