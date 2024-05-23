import { createSlice } from "@reduxjs/toolkit";

const ChineseSlice = createSlice({
     name : 'chinese',
    initialState : {
        allChinese : [
            {
                "id" : 1,
                "dish_name" : "Veg Noodles",
                "image" : 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/05/Veg-Hakka-Noodles-03.jpg?resize=1024%2C683',
                "Rating" : {"rate" : 4.4 , "rateData" : 'BESTSELLER'  },
                "Price" : 130
            },
            {
                "id" : 2,
                "dish_name" : "Veg Manchurian Dry",
                "image" : 'https://product-assets.faasos.io/production/product/image_1662646569264_Veg_Manchurian_Dry.jpg',
                "Rating" : {"rate" : 4.3 , "rateData" : 'BESTSELLER'  },
                "Price" : 110
            },
            {
                "id" : 3,
                "dish_name" : "Chicken Momo's",
                "image" : 'https://s3-ap-southeast-1.amazonaws.com/asia.urbanpiper.com/media/bizmedia/l/2020/11/24/Steamed_Chicken_Momos_COMPRESSED.jpg',
                "Rating" : {"rate" : 4.6 , "rateData" : 'BESTSELLER'  },
                "Price" : 210
            },
            {
                "id" : 4,
                "dish_name" : "Chilli Paneer",
                "image" : 'https://2.bp.blogspot.com/-AUIipIcOvLw/T4U1pOG92QI/AAAAAAAABFw/qq3x7PXNxU8/s1600/DSC_1385.JPG',
                "Rating" : {"rate" : 4.1 , "rateData" : 'BESTSELLER'  },
                "Price" : 190
            },
            {
                "id" : 5,
                "dish_name" : "Chow Mein",
                "image" : 'https://okdiario.com/img/2018/09/07/receta-de-chow-mein-de-verduras.jpg',
                "Rating" : {"rate" : 3.9 , "rateData" : 'BESTSELLER'  },
                "Price" : 160
            },
            {
                "id" : 6,
                "dish_name" : "Chilli Mushroom",
                "image" : 'https://farm1.staticflickr.com/278/20478511005_af35779f8d_o.jpg',
                "Rating" : {"rate" : 5.0 , "rateData" : 'BESTSELLER'  },
                "Price" : 100
            }
        ],
        isLoading : false,
        isError : false,
        isSuccess : false
    },
    reducers : {},
});

export default ChineseSlice.reducer;