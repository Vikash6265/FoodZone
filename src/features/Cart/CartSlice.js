import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
     name : 'cart',
    initialState : {
        cartItems : [],
        isLoading : false,
        isError : false,
        isSuccess : false
    },
    reducers : {
        addToCart : (state,action) =>{
            return {
                ...state,
                cartItems : [action.payload,...state.cartItems]
            }
        },

        removeCart : (state,action) =>{
            return {
                ...state,
                cartItems : state.cartItems.filter((item)=> item.id !== action.payload)
            }
        }
    },
});

export const {addToCart,removeCart} = CartSlice.actions;
export default CartSlice.reducer;