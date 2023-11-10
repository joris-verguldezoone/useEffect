import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import localStorage from './lib/localStorage'


function App() {

  const [itemName,setItemName] = useState('');
  const [itemValue, setItemValue] = useState(null);
  const [allUser, setAllUser] = useState(undefined)

  const [isFetch, setIsFetch] = useState(false)

 

  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname, setLastName] = useState('')



  async function fetchAllUser(){
    let response = await fetch('http://localhost/simple-php-server/traitement.php?allUsers',{
      method:'GET',
      mode:"cors"
    });
    let result = await response.json()
    console.log(result,'resultFetch')
    return result
  }

  function setNewItem(){
   
  
}

function handleSetIsFetch(){
  setIsFetch(true)
}

{user : 'firstname: firstname'}

async function register(){
  let formData = new FormData()
  formData.append('user', JSON.stringify({
    firstname: firstname,
    lastname:lastname,
    password:password,
    email:email
  }))

  await fetch('http://localhost/simple-php-server/traitement.php',{
    method:'POST',
    body:formData
  })

  setIsFetch(true)
  
}

useEffect(()=> {
  async function fetchAll(){
      let result = await fetchAllUser()
      setIsFetch(false)
      setAllUser(result)
      console.log('we are in ')
    }
   
    if(isFetch === true)
      fetchAll()
    console.log(allUser,'in useEffect')
},[isFetch]);

  return (
   <div className="flex flex-col">

      <label>Firstname</label>
      <input className='bg-gray-100' type="type" onChange={(event) => {setFirstname(event.target.value)}} />
      <label>LastName</label>
      <input className='bg-gray-100' type="type" onChange={(event) => {setLastName(event.target.value)}} />
      <label>Email</label>
      <input className='bg-gray-100' type="email" onChange={(event) => {setEmail(event.target.value)}} />
      <label>Password</label>
      <input className='bg-gray-100' type="password" onChange={(event) => {setPassword(event.target.value)}} />
      <button onClick={register}>S'inscrire</button>
     
      <button onClick={handleSetIsFetch}>FetchAllUser</button>
      {allUser != undefined && allUser.map((element, index) => {
        return(  <p key={index}>{element.firstname}</p>)
      })}
      












































































































































































































































































      

   </div>
  )
}

export default App
