import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // app reducer
    reducer: {
        cart: cartReducer,
    }
});

export default appStore