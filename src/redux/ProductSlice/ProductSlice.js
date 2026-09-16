import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
     
      const categories = [
        "laptops",
        "mobile-accessories",
        "smartphones",
        "tablets",
      ];

        const requests = categories.map((category) =>
      axios.get(`https://dummyjson.com/products/category/${category}`)
    );
       const response = await Promise.all(requests);
       const products = response.flatMap(
  (response) => response.data.products
);
return products;
//       const filtered = response.data.products.filter((product) =>
//         categories.includes(product.category)
//       );
//            console.log(filtered);
// console.log(response.data.products);
// console.log(
//   response.data.products.map((product) => product.category)
// );
//       return response.data.products;
          // return data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

 export const Filterproduct = createAsyncThunk(
  "products/filterproduct",
  async ({category= ""}, thunkAPI) => {
   
         console.log("Category:", category);
    try {
     
      const res = await axios.get(
  `https://dummyjson.com/products/category/${category} `
      );
     
      return res.data.products;
    } catch (error) {
    
      return thunkAPI.rejectWithValue( error.response?.data?.message || "Failed to fetch products");
    }
  },
);
 export const Productdetails = createAsyncThunk(
  "products/productdetails",
  async ({id = ""}, thunkAPI) => {
   
         console.log("id:", id);
    try {
     
      const res = await axios.get(
   `https://dummyjson.com/products/${id}`
      );
     
      return res.data;
    } catch (error) {
    
      return thunkAPI.rejectWithValue( error.response?.data?.message || "Failed to fetch products");
    }
  },
);

const productSlice = createSlice({
  name: "products",

  initialState: {
    products: [],
    loading: false,
    singleproduct:null,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
       .addCase(Filterproduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(Filterproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(Filterproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
       .addCase(Productdetails.pending, (state) => {
        state.loading = true;
      })

      .addCase(Productdetails.fulfilled, (state, action) => {
        state.loading = false;
        state.singleproduct = action.payload;
        state.message = action.payload
      })

      .addCase(Productdetails.rejected, (state, action) => {
        state.loading = false;
        state.singleproduct = null;
        state.error = action.payload || action.error.message;
      })
      ;
  },
});

export default productSlice.reducer;