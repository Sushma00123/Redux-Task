import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import { fetch_Data } from '../redux/actions/action';

function User() {
    const userList = useSelector(state => state.user.users);
    const [Loading, setLoading] = useState(true)
    console.log(Loading)
    console.log('userlist', userList);
    const disptach = useDispatch();

    useEffect(() => {
        
        disptach(fetch_Data())
        
    }, [])

    return (
        <div>
            {/* <button onClick={()=>disptach(fetch_Data())}> click to get data</button> */}

            <h1>Users List</h1>
            {Loading ?
                <table className="table" align='center' >
                    <thead>
                        <tr>
                            <th scope="col">sl No</th>
                            <th scope="col">Name</th>
                            <th scope='col'>User Details</th>
                            {/* <th scope="col">UserName</th>
                        <th scope="col">email</th>
                        <th scope="col">website</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {userList?.map((val, i) => {
                            return (
                                <tr key={i}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td><NavLink to={`/user/details/${val.id}`}>Details</NavLink></td>
                                    {/* <td>{val.username}</td>
                            <td>{val.email}</td>
                            <td>{val.email}</td> */}
                                </tr>

                            )
                        })}
                    </tbody>
                </table> :<h2>Loading</h2>}
        </div>

    )
}
export default User