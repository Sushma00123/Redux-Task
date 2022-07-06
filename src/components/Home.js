import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addData } from '../redux/actions/action';

function Home() {
  const disptach = useDispatch();
  const data = useSelector((state => state.input.inputData))
   console.log(data)

  // const handleChange = (event) => {
  //   disptach(addData(event.target.value))
  // }


  return (
    <>
      <div>
        <h1>Home page</h1>
        <div>
          <label for="">Enter your name: </label>
          <input type="text" name="username" onChange={(event) => disptach(addData(event.target.value))} />
          <p>WELCOME:   {data}</p>
        </div>

      </div>
    </>
  )
}

export default Home 