import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductWithCount {
  id: number;
  count: number;
  inventory_count: number;
}

interface ProductPayload {
  id: number;
  inventory_count: number;
}

interface SetCounterPayload {
  id: number;
  value: number;
  inventory_count: number;
}

const initialState: ProductWithCount[] = [];

const productCountSlice = createSlice({
  name: "productCount",
  initialState,
  reducers: {
    increaseProductCount: (state, action: PayloadAction<ProductPayload>) => {
      const { id, inventory_count } = action.payload;
      const product = state.find((p) => p.id === id);

      if (product) {
        console.log(
          `Found product: ${product.id}, Current count: ${product.count}, Inventory count: ${inventory_count}`
        );
        if (inventory_count === 0 || product.count < inventory_count) {
          product.count += 1;
          console.log(`Increased product count to: ${product.count}`);
        } else {
          console.log("Cannot increase: reached inventory limit");
        }
      } else {
        console.log(`Adding new product with id: ${id}`);
        state.push({ id, count: 1, inventory_count });
      }
    },

    decreaseProductCount: (state, action: PayloadAction<number>) => {
      const product = state.find((p) => p.id === action.payload);
      if (product && product.count > 1) {
        product.count -= 1;
      }
    },
    updateCounter: (state, action: PayloadAction<number>) => {
      const product = state.find((p) => p.id === action.payload);
      if (product) {
        product.count = 0;
      }
    },
    resetAllCounts: (state) => {
      state.forEach((product) => {
        product.count = 0;
      });
    },
    setCounter: (state, action: PayloadAction<SetCounterPayload>) => {
      const { id, value, inventory_count } = action.payload;
      const product = state.find((p) => p.id === id);
      if (product) {
      } else {
        state.push({ id, count: value, inventory_count });
      }
    },
  },
});

export const {
  increaseProductCount,
  decreaseProductCount,
  updateCounter,
  resetAllCounts,
  setCounter,
} = productCountSlice.actions;
export default productCountSlice.reducer;
