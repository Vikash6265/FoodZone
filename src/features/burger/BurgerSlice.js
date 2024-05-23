import { createSlice } from "@reduxjs/toolkit";

const BurgerSlice = createSlice({
     name : 'burger',
    initialState : {
        allBurger : [
            {
                "id" : 1,
                "dish_name" : "Chicken Nashville Burger",
                "image" : 'http://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/the-vegetarian-butcher/nasvhille-hot-burger/1245x600_Nashville%20style%20Chicken%20Burger.jpg',
                "Rating" : {"rate" : 4.4 , "rateData" : 'BESTSELLER'  },
                "Price" : 239
            },
            {
                "id" : 2,
                "dish_name" : "MCAloo Tikki Burger",
                "image" : 'https://tse3.mm.bing.net/th?id=OIP.kUlTHr5b9I9XVbSmfmv7EwHaE8&pid=Api&P=0&h=220',
                "Rating" : {"rate" : 4.3 , "rateData" : 'BESTSELLER'  },
                "Price" : 69
            },
            {
                "id" : 3,
                "dish_name" : "Cheesy Veggie Burger",
                "image" : 'https://tse1.mm.bing.net/th?id=OIP.sBdsAKI25KJMW8YiY_9Q8QHaE8&pid=Api&P=0&h=220',
                "Rating" : {"rate" : 4.6 , "rateData" : 'BESTSELLER'  },
                "Price" : 159
            },
            {
                "id" : 4,
                "dish_name" : "Veg Cheese Burger",
                "image" : 'https://c.recipeland.com/images/r/20888/00147d86122134cde720_1024.jpg',
                "Rating" : {"rate" : 4.1 , "rateData" : 'BESTSELLER'  },
                "Price" : 135
            },
            {
                "id" : 5,
                "dish_name" : "Veg Burger",
                "image" : 'https://tse4.mm.bing.net/th?id=OIP.tYPcBnTxuEEyOHt6NAbCQAHaE8&pid=Api&P=0&h=220',
                "Rating" : {"rate" : 3.9 , "rateData" : 'BESTSELLER'  },
                "Price" : 100
            },
            {
                "id" : 6,
                "dish_name" : "Tandori Cheese Burger",
                "image" : 'https://tse2.mm.bing.net/th?id=OIP.6cey8x7mmVU9332dP07-1gHaEo&pid=Api&P=0&h=220',
                "Rating" : {"rate" : 5.0 , "rateData" : 'BESTSELLER'  },
                "Price" : 219
            }
        ],
        isLoading : false,
        isError : false,
        isSuccess : false
    },
    reducers : {},
});

export default BurgerSlice.reducer;