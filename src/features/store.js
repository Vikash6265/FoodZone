import { configureStore } from "@reduxjs/toolkit";
import BurgerReducer from "./burger/BurgerSlice";
import SabjiReducer from "./sabji/SabjiSlice";
import IceCreamReducer from "./iceCream/IceCreamSlice";
import PizzaReducer from "./pizza/PizzaSlice";
import SweetsReducer from "./sweets/SweetsSlice";
import ChineseReducer from "./chinese/ChineseSlice";
import CartReducer from "./Cart/CartSlice";
import CarousalReducer from "./IdliDosa/CarousalSlice";

const store = configureStore({
    reducer : {
        burger : BurgerReducer,
        sabji : SabjiReducer,
        icecream : IceCreamReducer,
        pizza : PizzaReducer,
        sweets : SweetsReducer,
        chinese : ChineseReducer,
        cart : CartReducer,
        carousal : CarousalReducer,
    }
});

export default store;