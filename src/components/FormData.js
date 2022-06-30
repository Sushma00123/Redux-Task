import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addData } from '../redux/actions/action';

function FormData() {
// const [username,setUsername] = useState('');
const disptach = useDispatch();

const data = useSelector((state=>state))
console.log(data)
    
const handleChange = (event)=>{
    disptach(addData(event.target.value))
}

   
  return (
    <>
    <div>
        <form>
        <label for="">Enter your name: </label>
        <input type="text" name="username" onChange={(event)=>{handleChange(event)}}/>

            <p>{data}</p>
      
        </form>
      
    </div>  
</>
  )
}

export default FormData