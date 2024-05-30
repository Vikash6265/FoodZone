import { createSlice } from "@reduxjs/toolkit";

const PizzaSlice = createSlice({
     name : 'pizza',
    initialState : {
        allPizza : [
            {
                "id" : 1,
                "dish_name" : "Corn Pizza",
                "image" : 'https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden-1536x1024.jpg',
                "Rating" : {"rate" : 4.4 , "rateData" : 'BESTSELLER'  },
                "Price" : 250,
                "qty" : 1,
            },
            {
                "id" : 2,
                "dish_name" : "Veg Cheese Pizza",
                "image" : 'https://i.ytimg.com/vi/0hyCDmSKTgw/hqdefault.jpg',
                "Rating" : {"rate" : 4.3 , "rateData" : 'BESTSELLER'  },
                "Price" : 286,
                "qty" : 1,
            },
            {
                "id" : 3,
                "dish_name" : "Chicken Pizza",
                "image" : 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Grilled_Chicken_with_Caramelized_Onion_Whole_Wheat_Pizza_Recipe.jpg',
                "Rating" : {"rate" : 4.6 , "rateData" : 'BESTSELLER'  },
                "Price" : 300,
                "qty" : 1,
            },
            {
                "id" : 4,
                "dish_name" : "Onion & Garlic Pizza",
                "image" : 'https://i.redd.it/n55dcqcfeyh01.jpg',
                "Rating" : {"rate" : 4.1 , "rateData" : 'BESTSELLER'  },
                "Price" : 99,
                "qty" : 1,
            },
            {
                "id" : 5,
                "dish_name" : "Double Paneer Pizza",
                "image" : 'https://d3gy1em549lxx2.cloudfront.net/13677188-6708-443e-b1e9-ddface810db8.jpg',
                "Rating" : {"rate" : 3.9 , "rateData" : 'BESTSELLER'  },
                "Price" : 270,
                "qty" : 1,
            },
            {
                "id" : 6,
                "dish_name" : "Margherita Pizza",
                "image" : 'https://tse2.mm.bing.net/th?id=OIP.6UH3qEPNmsSx3etzlSmEHAHaE8&pid=Api&P=0&h=220',
                "Rating" : {"rate" : 5.0 , "rateData" : 'BESTSELLER'  },
                "Price" : 210,
                "qty" : 1,
            }
        ],
        isLoading : false,
        isError : false,
        isSuccess : false
    },
    reducers : {},
});

export default PizzaSlice.reducer;