import { User } from './components/User'
import { UserOb } from './components/UserOb'
import { UsersAr } from './components/UsersAr'
import { DataFetch } from './components/DataFetch'
import { Btn } from './components/Btn'

let date = new Date().getFullYear()

// String, number, bool, Arr
const myName = "Imran Hossain"
const age = date - 1999
const reg = true
const lang = ["Bangla", "English", "Hindi"]

// Object
const userData = {
  myName: "Afro De",
  age: date - 1999,
  reg: true,
  lang: ["Bangla", "English", "Hindi"],
}
// Obj Arr
const usersData = [
  {
    id: 1,
    name: "anisul islam",
    email: "anisul@gamil.com",
    age: 32
  },
  {
    id: 2,
    name: "rakibul islam",
    email: "rakibul@gmail.com",
    age: 33
  }
]


export const App = () => {
  return (
    <div className='h-screen flex flex-col space-y-5 justify-center items-center'>
      <div className='grid gap-4 grid-cols-2 max-w-3xl'>
        <User n={myName} a={age} r={reg} l={lang} />
        <UserOb obj={userData} />
        <UsersAr ur={usersData} />
      </div>
      <div className='flex space-x-4'>
      <Btn>My button</Btn>
      <DataFetch status={"success"} />

      </div>
    </div>
  )
}