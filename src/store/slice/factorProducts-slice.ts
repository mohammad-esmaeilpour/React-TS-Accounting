import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "src/types/Product.types"; 

export interface TProductWithExtras extends TProduct {
  tax_price?: number;
  discount_price?: number;
  unit_price?: number;
  warehouse_id?: number;
  product_id: number;
}

interface TProductUpdate {
  id?: number;
  tax_price?: number;
  discount_price?: number;
  count?: number;
  warehouse_id?: number;
  product_id: number;
  unit_price?: number;
}


const initialState: TProductWithExtras[] = [];

const factorProductsSlice = createSlice({
  name: "factorProducts",
  initialState,
  reducers: {
    updateFactorProducts: (state, action: PayloadAction<TProduct>) => {
      const productExists = state.some(
        (product) => product.id === action.payload.id
      );

      if (!productExists) {
        state.push({
          ...action.payload,
          product_id: action.payload.id, 
        });
      } else {
        // Remove product (toggle behavior)
        return state.filter((product) => product.id !== action.payload.id);
      }
    },

    updateProductValues: (state, action: PayloadAction<TProductUpdate>) => {
      const { product_id, tax_price,unit_price, discount_price, count, warehouse_id } =
        action.payload;

      // Find product by product_id
      const product = state.find((p) => p.product_id === product_id);

      if (product) {
        if (tax_price !== undefined) {
          product.tax_price = tax_price;
        }
        if (discount_price !== undefined) {
          product.discount_price = discount_price;
        }
        if (count !== undefined) {
          product.count = count;
        }
        if (warehouse_id !== undefined) {
          product.warehouse_id = warehouse_id;
        }
        if(unit_price !== undefined) {
          product.unit_price = unit_price;
        }
      }
    },

    replaceFactorProducts: (
      __state,
      action: PayloadAction<TProductWithExtras[]>
    ) => {
      return action.payload; // Simply replace the current state with the new array
    },
  },
});


export const {
  updateFactorProducts,
  updateProductValues,
  replaceFactorProducts,
} = factorProductsSlice.actions;
export default factorProductsSlice.reducer;
