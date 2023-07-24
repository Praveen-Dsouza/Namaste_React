import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit => We have to mutate the state
      // Redux Toolkit uses Immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = ["pizza"]
    clearCart: (state) => {
      console.log(state); // ["pizza"]
      console.log(current(state));
      state = [];
      console.log(state); // [] local state change not originalState=["pizza"]

      // RTK - either Mutate the existing state or return a new State
      //   state.items.length = 0; // originalState = []
      return { items: [] }; // this new Object will be replaced inside originalState = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
