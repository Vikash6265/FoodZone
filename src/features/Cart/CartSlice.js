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

        // return {
        //     ...state,
        //     cartItems : [action.payload,...state.cartItems]
        // }

        addToCart : (state,action) =>{
           const existingItem = state.cartItems.find((item)=> item.id === action.payload.id);

           if(existingItem){
            state.cartItems = state.cartItems.map((item)=>item.id === action.payload.id ? {
                ...item,
                qty : item.qty + 1
            } : item);
           }
           else{
            state.cartItems = [action.payload,...state.cartItems];
           }
        },

        removeCart : (state,action) =>{
            return {
                ...state,
                cartItems : state.cartItems.filter((item)=> item.id !== action.payload)
            }
        },

        // increment to cart

        incrementQty : (state,action) =>{
            state.cartItems = state.cartItems.map((item)=>item.id === action.payload ? {
                ...item,
                qty : item.qty + 1
            } : item);
        },

        decrementQty : (state,action) =>{
            state.cartItems = state.cartItems.map((item)=>item.id === action.payload ? {
                ...item,
                qty : item.qty - 1
            } : item);
        },

        // qty to cart

        qtyprice : (state,action) =>{
            state.cartItems = state.cartItems.map((item)=>item.id === action.payload ? {
                ...item,
                qty : item.qty * item.price
            } : item);
        }
    },
});

export const {addToCart,removeCart,incrementQty,decrementQty,qtyprice} = CartSlice.actions;
export default CartSlice.reducer;