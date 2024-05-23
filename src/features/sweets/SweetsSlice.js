import { createSlice } from "@reduxjs/toolkit";

const SweetsSlice = createSlice({
     name : 'sweets',
    initialState : {
        allSweets : [
            {
                "id" : 1,
                "dish_name" : "Sweet Malai Chum chum",
                "image" : 'https://www.india-store.de/images/thumbnail/produkte/xlarge/food01/003/dairy_valley_kaju_katli_3.jpg',
                "Rating" : {"rate" : 4.4 , "rateData" : 'BESTSELLER'  },
                "Price" : 250
            },
            {
                "id" : 2,
                "dish_name" : "Soft Rasmalai",
                "image" : 'http://d2droglu4qf8st.cloudfront.net/2015/09/236248/Old-Fashioned-Hot-Milk-Cake_ExtraLarge1000_ID-1186798.jpg?v=1186798',
                "Rating" : {"rate" : 4.3 , "rateData" : 'BESTSELLER'  },
                "Price" : 155
            },
            {
                "id" : 3,
                "dish_name" : "Hot Milk Cake",
                "image" : 'https://www.thestatesman.com/wp-content/uploads/2019/06/rasgulla.jpg',
                "Rating" : {"rate" : 4.6 , "rateData" : 'BESTSELLER'  },
                "Price" : 128
            },
            {
                "id" : 4,
                "dish_name" : "Keshar Elaichi Mix Srikhand",
                "image" : 'https://recipes.net/wp-content/uploads/2021/03/shrikhand-recipe.jpg',
                "Rating" : {"rate" : 4.1 , "rateData" : 'BESTSELLER'  },
                "Price" : 110
            },
            {
                "id" : 5,
                "dish_name" : "Kaju Katli",
                "image" : 'https://i2.wp.com/www.rasoimenu.com/wp-content/uploads/2015/07/Dates-Rasmalai-Recipe.jpg?fit=1920%2C1080&ssl=1',
                "Rating" : {"rate" : 3.9 , "rateData" : 'BESTSELLER'  },
                "Price" : 233.33
            },
            {
                "id" : 6,
                "dish_name" : "Rasgulla",
                "image" : 'https://www.teahub.io/photos/full/187-1874882_sweet-malai-chum-chum-mithai-cham-cham-sweet.jpg',
                "Rating" : {"rate" : 5.0 , "rateData" : 'BESTSELLER'  },
                "Price" : 180
            }
        ],
        isLoading : false,
        isError : false,
        isSuccess : false
    },
    reducers : {},
});

export default SweetsSlice.reducer;