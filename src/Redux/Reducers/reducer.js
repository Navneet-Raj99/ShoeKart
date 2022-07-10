const initialState = {
  carts: [],
};
let temp = 0;
const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      temp = 0;
      const index=state.carts.findIndex((element)=>
      {
        return(element.id===action.payload.id)
      })
      if(index>=0)
      
      {
        state.carts[index].qnty=state.carts[index].qnty+1;
      }
      else
      {
       
        action.payload.qnty = action.payload.qnty + 1;
        return {
          //technique to be used when you want to enter a element in the array without removing the old elements from the array
          ...state,
          carts: [...state.carts, action.payload], //same code rull as we do in spread operator for usestate hooks
          
        };
      }
      // state.carts.map((element) => {
      //   if (action.payload.id == element.id) {
         
      //     action.payload.qnty = action.payload.qnty + 1;
      //     // state.carts[0].qnty=state.carts[0].qnty+1;
      //     temp++;
        
      //   } else {
      //     console.log("Hello");
      //   }
      // });
      // if (temp == 0) {
      //   action.payload.qnty = action.payload.qnty + 1;
      
   
        
      // } else {
      //   return state;
      // }

    case "DELETE_ITEM":
      const data = state.carts.filter(
        (element) => element.id !== action.payload
      );

      return {
        ...state,
        carts: data,
      };
    case "REMOVE_ONE":
      if (action.payload.qnty > 0) {
        action.payload.qnty = action.payload.qnty - 1;
        return state;
      } else {
        console.log("Nothing TO do");
      }
    default:
      return state;
  }
};
export default cartreducer;
