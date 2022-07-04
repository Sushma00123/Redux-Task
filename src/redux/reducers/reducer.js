

export const myReducer = (state=[],action)=>{
const a =[]
// console.log(a);
// console.log(state);


switch (action.type) {
    case 'ADD':
      a.push(action.payload) 
      return  a
      case 'FETCH':
      //  console.log(action.payload)
       state.push(action.payload)
    default:
        return a;
     
}
}
// const initialState=''

// export const myReducer = (state=initialState,action)=>{
// const stateCopy =[]
// console.log(stateCopy);

// switch (action.type) {
//     case 'ADD':
//       stateCopy.push(action.payload) 
//       return  stateCopy
//     default:
//         return stateCopy;
     
// }
// }