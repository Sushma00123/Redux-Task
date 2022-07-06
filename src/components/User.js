import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_Data } from '../redux/actions/action';

function User() {
    const userList = useSelector(state => state.user.users);
    console.log('userlist',userList);
    const disptach = useDispatch();

    return (
        <div>
            <button onClick={()=>disptach(fetch_Data())}> click to get data</button>
            
            <h1>User Page</h1>
            <table className="table" align='center' >
                <thead>
                    <tr>
                        <th scope="col">sl No</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">email</th>
                        <th scope="col">website</th>

                    </tr>
                </thead>
                <tbody>
                {userList?.map((val,i)=>{
                    return(
                        <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                            <td>{val.email}</td>
                        </tr>

                    )
                })}
                </tbody>
            </table>
         
        </div>
    )
}
export default User