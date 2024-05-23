import { createSlice } from "@reduxjs/toolkit";

const SabjiSlice = createSlice({
     name : 'sabji',
    initialState : {
        allSabji : [
            {
                "id" : 1,
                "dish_name" : "Aloo Matur",
                "image" : 'https://images.slurrp.com/prod/recipe_images/transcribe/dinner/Aloo-Gajar-Matar-Sabji.webp',
                "Rating" : {"rate" : 4.4 , "rateData" : 'BESTSELLER'  },
                "Price" : 200
            },
            {
                "id" : 2,
                "dish_name" : "Sev Sabji",
                "image" : 'http://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Gujarati_Sev_Tamatar_Nu_Shaak_Recipe_video_3_1600.jpg',
                "Rating" : {"rate" : 4.3 , "rateData" : 'BESTSELLER'  },
                "Price" : 120
            },
            {
                "id" : 3,
                "dish_name" : "Paneer Sabji",
                "image" : 'https://i.ytimg.com/vi/3yGuT-p6d30/maxresdefault.jpg',
                "Rating" : {"rate" : 4.6 , "rateData" : 'BESTSELLER'  },
                "Price" : 250
            },
            {
                "id" : 4,
                "dish_name" : "Kaju Curry",
                "image" : 'https://www.nextbihar.com/wp-content/uploads/2022/08/Kaju-Curry-Recipe-1.jpg',
                "Rating" : {"rate" : 4.1 , "rateData" : 'BESTSELLER'  },
                "Price" : 320
            },
            {
                "id" : 5,
                "dish_name" : "Tomato Sabzi",
                "image" : 'https://www.rasoimenu.com/wp-content/uploads/2017/04/onion-tomato-sabji-recipe-by-rasoi-menu.jpg',
                "Rating" : {"rate" : 3.9 , "rateData" : 'BESTSELLER'  },
                "Price" : 130
            },
            {
                "id" : 6,
                "dish_name" : "Dal Tadka",
                "image" : 'https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka-500x500.jpg',
                "Rating" : {"rate" : 5.0 , "rateData" : 'BESTSELLER'  },
                "Price" : 120
            }
        ],
        isLoading : false,
        isError : false,
        isSuccess : false
    },
    reducers : {},
});

export default SabjiSlice.reducer;