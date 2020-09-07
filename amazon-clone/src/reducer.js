export const initialState = {
    basket:[],
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET': 
        //logic to add item
        return {
            ...state,
            basket: [...state.basket,action.item]
        };
        break;
        case 'REMOVE_FROM_BASKET':
            //remove item from basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            if(index>=0){
                 //item exists
                 newBasket.splice(index,1)
            }else{
                console.warn(`can't display doesn't exist`)
            }
            return {...state,basket: newBasket};
        break;
         default:
             return state;
    }
}
export default reducer