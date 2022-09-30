import { useEffect, useState } from 'react';

function Users() {
    const [usersInDb, setUsersInDb]= useState([])

    const [lastUserInDb, setLastUserInDb]= useState({})
    useEffect(()=>{
    fetch("http://localhost:3000/api/users/")
    .then(usuarios=>usuarios.json())
    .then(({users})=>{
      setUsersInDb(users)
      setLastUserInDb(users[users.length-1])
    })
  },[])

  return(
    <>

    <div>
        <h2>Cantidad total de usuarios </h2>
        <h4>{usersInDb.length}</h4>
    </div>

    <br/> 
    <br/> 
    <br/> 
    <div>
        <h2>Último usuario creado </h2>
        <h4> ID: {lastUserInDb.id}</h4>
        <h4> NOMBRE: {lastUserInDb.name}</h4>
        <h4> EMAIL: {lastUserInDb.email}</h4>
    </div>
    </>
  )
}

export default Users;