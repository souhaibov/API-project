import React from 'react'
import './App.css'

const UserList = ({user}) => {
  return (
    user.map((el) =>
    <div className='card'>
        <img src="https://th.bing.com/th/id/OIP.I3UYYj0prw1RNHoqLamMRAHaEK?pid=ImgDet&rs=1" alt="xxx" />   
    <h1>{el.name}</h1>
    <h1>{el.username}</h1>
    <h2 style={{textAlign: 'left', marginLeft: '40px'}}>E.mail : {el.email}</h2>
    <ul>
        <li>Address : {el.address.street}</li>
        <li>Suite : {el.address.suite}</li>
        <li>City : {el.address.city}</li>
        <li>Zip Code : {el.address.zipcode}</li>
        <li> Phone Number : {el.phone}</li>
    </ul>
    
    
    </div>)
  )
}

export default UserList