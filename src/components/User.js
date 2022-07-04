import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_Data } from '../redux/actions/action';

function User() {
    const fetchData = useSelector((state) => state);
    const disptach = useDispatch();

    useEffect(() => {
        disptach(fetch_Data())

    }, [])
    console.log(fetchData)
       

    
    return (
        <div>
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
                    {fetchData.map((data, ind) => {
                        return (
                            <tr>
                                <td>{data.username}</td>
                                <td>Sushma</td>
                                <td>Sushma</td>
                                <td>sushma@gmail.com</td>
                                <td>fgshggfhs</td>

                            </tr>
                        )

                    })}


                </tbody>
            </table>
        </div>
    )
}
export default User