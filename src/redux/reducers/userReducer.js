// // const initialState = {
// //     users:[]
// //   }
//   const initialState =[]
  
  
// const userReducer = (state=initialState,action)=>{
//   var c=[]

//   switch (action.type) {
//     // case 'ADD':
//     //   st=action.payload
//     //   return st
      
//     case 'FETCH':
//        var data=action.payload
       
//        console.log(data);
     
//        initialState.push(data)
//        c.push(...initialState)
//        console.log(c); 
  
//   return c


       
//       default:
//           return state
       
//    }
  // }
  // export default userReducer

  
  const initialState = {
    users:[]//action.payload
  }
  
const userReducer = (state=initialState,action)=>{

  switch (action.type) { 
    case 'FETCH':
       return {...state,users:action.payload}
       
      default:
          return state
       
   }
  }
  export default userReducer
  