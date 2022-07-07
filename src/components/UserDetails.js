import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const param = useParams()
    console.log(param.id)
    const [details, setdetails] = useState({})
   

    const userdata = useSelector(state => state.user.users);

    const DisplayUser = ()=>{
       for (let i = 0; i < userdata.length; i++) {
        // console.log(userdata[i].id)
        if(userdata[i].id===parseInt(param.id)){
          setdetails(userdata[i])
        }
        
        
       }
    }

    useEffect(() => {
      DisplayUser()
    }, [])
    console.log('dgdg',details)

    
   

    return (
        <div>
            <h1>User Details</h1>
            <div className="card" >
                <div className="card-body" >
                    <h5 className="card-title">Name : {details.name}</h5>
                    <h5 className="card-title">Username: {details.username}</h5>
                    <h5 className="card-title">Email: {details.email}</h5>
                    <h5 className="card-title">Phone: {details.phone}</h5>
                    <h5 className="card-title">Company: {details.company.name}</h5>
                    <h5 className="card-subtitle mb-2">Website: {details.website}</h5>
                </div>
            </div>

        </div>
    )
}

export default UserDetails