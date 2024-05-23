import { createSlice } from "@reduxjs/toolkit";

const IceCreamSlice = createSlice({
     name : 'icecream',
    initialState : {
        allIceCream : [
            {
                "id" : 1,
                "dish_name" : "Mango Ice Cream",
                "image" : 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2020/12/Mango-ice-cream-29.jpg',
                "Rating" : {"rate" : 4.4 , "rateData" : 'BESTSELLER'  },
                "Price" : 200
            },
            {
                "id" : 2,
                "dish_name" : "Coconut Ice Cream",
                "image" : 'https://rachelcooksthai.com/wp-content/uploads/2022/08/Coconut-Ice-Cream-Big-11.jpg',
                "Rating" : {"rate" : 4.3 , "rateData" : 'BESTSELLER'  },
                "Price" : 140
            },
            {
                "id" : 3,
                "dish_name" : "Vanilla Ice Cream",
                "image" : 'https://wallpapercave.com/wp/wp8868150.jpg',
                "Rating" : {"rate" : 4.6 , "rateData" : 'BESTSELLER'  },
                "Price" : 180
            },
            {
                "id" : 4,
                "dish_name" : "Chocalate Ice cream",
                "image" : 'https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Bowl-of-chocolate-ice-cream.jpg',
                "Rating" : {"rate" : 4.1 , "rateData" : 'BESTSELLER'  },
                "Price" : 220
            },
            {
                "id" : 5,
                "dish_name" : "Strawberry Ice Cream",
                "image" : 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2020/10/strawberry-ice-cream-1024x768.jpg',
                "Rating" : {"rate" : 3.9 , "rateData" : 'BESTSELLER'  },
                "Price" : 190
            },
            {
                "id" : 6,
                "dish_name" : "Choco Bar Ice Cream",
                "image" : 'https://www.thelittleepicurean.com/wp-content/uploads/2017/06/funfetti-ice-cream-bars-1.jpg',
                "Rating" : {"rate" : 5.0 , "rateData" : 'BESTSELLER'  },
                "Price" : 170
            }
        ],
        isLoading : false,
        isError : false,
        isSuccess : false
    },
    reducers : {},
});

export default IceCreamSlice.reducer;