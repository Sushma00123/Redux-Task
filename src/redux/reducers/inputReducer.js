const initialState = {
  inputData:[]
};

const inputReducer = (state=initialState,action)=>{
  switch (action.type) {
    case 'ADD':
      return {...state,inputData:action.payload}
    default:
     return state
  }
}
export default inputReducer

