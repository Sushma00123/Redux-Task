const initialState = {
  inputData:''
};

const inputReducer = (state=initialState,action)=>{
  switch (action.type) {
    case 'ADD':
      return {inputData:action.payload}
    default:
     return state
  }
}
export default inputReducer

