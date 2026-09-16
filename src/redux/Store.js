import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice/CartSlice";
import  productReducer  from "./ProductSlice/ProductSlice";
import userReducer from "./UserSlice/UserSlice"


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    user: userReducer,

  },
});