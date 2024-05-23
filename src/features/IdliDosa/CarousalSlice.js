import { createSlice } from "@reduxjs/toolkit";

const CarousalSlice = createSlice({
     name : 'carousal',
    initialState : {
        allCarousal : [
            {
                "id" : 1,
                "dish_name" : "Aloo Paratha",
                "category" : "paratha",
                "image" : 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breads/Easy_Aloo_Paratha_Recipe_North_Indian_Punjabi_Style-1.jpg',
                "Rating" : {"rate" : 4.4 , "rateData" : 'BESTSELLER'  },
                "Price" : 120
            },
            {
                "id" : 2,
                "dish_name" : "Methi Paratha",
                "category" : "paratha",
                "image" : 'https://www.lekhafoods.com/media/1050760/methi-paratha.jpg',
                "Rating" : {"rate" : 4.3 , "rateData" : 'BESTSELLER'  },
                "Price" : 100
            },
            {
                "id" : 3,
                "dish_name" : "Sev Paratha",
                "category" : "paratha",
                "image" : 'https://i.ytimg.com/vi/TMBMrKJewnc/maxresdefault.jpg',
                "Rating" : {"rate" : 4.6 , "rateData" : 'BESTSELLER'  },
                "Price" : 160
            },
            {
                "id" : 4,
                "dish_name" : "Laccha Paratha",
                "category" : "paratha",
                "image" : 'https://www.thespruceeats.com/thmb/rAc7PkGDKqBlSmqAXHFTdSfh8bc=/2121x1414/filters:fill(auto,1)/GettyImages-618764348-5c829cb746e0fb0001cbf4b4.jpg',
                "Rating" : {"rate" : 4.1 , "rateData" : 'BESTSELLER'  },
                "Price" : 135
            },
            {
                "id" : 5,
                "dish_name" : "Plain Paratha",
                "category" : "paratha",
                "image" : 'https://i.ytimg.com/vi/3D69EMLJ4Iw/maxresdefault.jpg',
                "Rating" : {"rate" : 3.9 , "rateData" : 'BESTSELLER'  },
                "Price" : 100
            },
            {
                "id" : 6,
                "dish_name" : "Tandori Paratha",
                "category" : "paratha",
                "image" : 'https://tks.ae/wp-content/uploads/2016/11/plain-paratha-scaled.jpg',
                "Rating" : {"rate" : 5.0 , "rateData" : 'BESTSELLER'  },
                "Price" : 190
            },
            {
                "id" : 7,
                "dish_name" : "Chocalate Cake",
                "category" : "cake",
                "image" : 'http://cakebycourtney.com/wp-content/uploads/2018/05/IMG_6702.jpg',
                "Rating" : {"rate" : 4.4 , "rateData" : 'BESTSELLER'  },
                "Price" : 350
            },
            {
                "id" : 8,
                "dish_name" : "Strawberry Cake",
                "category" : "cake",
                "image" : 'https://myincrediblerecipes.com/wp-content/uploads/2020/02/Choc-strawberry-cake-3-6-scaled.jpg',
                "Rating" : {"rate" : 4.3 , "rateData" : 'BESTSELLER'  },
                "Price" : 190
            },
            {
                "id" : 9,
                "dish_name" : "Choco Lava Cake",
                "category" : "cake",
                "image" : 'https://rhubarbandcod.com/wp-content/uploads/2022/02/Chocolate-Lava-Cakes-1.jpg',
                "Rating" : {"rate" : 4.6 , "rateData" : 'BESTSELLER'  },
                "Price" : 159
            },
            {
                "id" : 10,
                "dish_name" : "Mix Fruit Cake",
                "category" : "cake",
                "image" : 'https://www.bloomsonly.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/m/i/mix-fruit-cake.jpg',
                "Rating" : {"rate" : 4.1 , "rateData" : 'BESTSELLER'  },
                "Price" : 210
            },
            {
                "id" : 11,
                "dish_name" : "Ras Malai Cake",
                "category" : "cake",
                "image" : 'https://www.eg2i.com/uploads/product_image/product_1084_1.jpg',
                "Rating" : {"rate" : 3.9 , "rateData" : 'BESTSELLER'  },
                "Price" : 170
            },
            {
                "id" : 12,
                "dish_name" : "ButterScotch Cake",
                "category" : "cake",
                "image" : 'https://media.bakingo.com/sq-butterscotch-cake0003butt-AA.jpg',
                "Rating" : {"rate" : 5.0 , "rateData" : 'BESTSELLER'  },
                "Price" : 219
            },
            {
                "id" : 13,
                "dish_name" : "Idli With Carrot Mix",
                "category" : "idliDosa",
                "image" : 'https://www.healthifyme.com/blog/wp-content/uploads/2018/03/idly2.jpeg',
                "Rating" : {"rate" : 4.4 , "rateData" : 'BESTSELLER'  },
                "Price" : 125
            },
            {
                "id" : 14,
                "dish_name" : "Fried Idli",
                "category" : "idliDosa",
                "image" : 'https://i1.wp.com/vegecravings.com/wp-content/uploads/2017/03/fried-idli-recipe-step-by-step-instructions.jpg?w=2418&quality=65&strip=all&ssl=1',
                "Rating" : {"rate" : 4.3 , "rateData" : 'BESTSELLER'  },
                "Price" : 180
            },
            {
                "id" : 15,
                "dish_name" : "Masala Dosa",
                "category" : "idliDosa",
                "image" : 'https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa.jpg',
                "Rating" : {"rate" : 4.6 , "rateData" : 'BESTSELLER'  },
                "Price" : 259
            },
            {
                "id" : 16,
                "dish_name" : "Plain Dosa",
                "category" : "idliDosa",
                "image" : 'https://3.imimg.com/data3/DQ/KC/MY-16504432/moong-dal-dosa-500x500.jpg',
                "Rating" : {"rate" : 4.1 , "rateData" : 'BESTSELLER'  },
                "Price" : 135
            },
            {
                "id" : 17,
                "dish_name" : "Butter Dosa",
                "category" : "idliDosa",
                "image" : 'https://shivani.co.nz/mountroskill/wp-content/uploads/2020/04/Plain-dosa.jpg',
                "Rating" : {"rate" : 3.9 , "rateData" : 'BESTSELLER'  },
                "Price" : 170
            },
            {
                "id" : 18,
                "dish_name" : "Paneer Dosa",
                "category" : "idliDosa",
                "image" : 'https://i.ytimg.com/vi/1ZXN6xHmf9Y/maxresdefault.jpg',
                "Rating" : {"rate" : 5.0 , "rateData" : 'BESTSELLER'  },
                "Price" : 215
            }
        ],
        isLoading : false,
        isError : false,
        isSuccess : false
    },
    reducers : {},
});

export default CarousalSlice.reducer;