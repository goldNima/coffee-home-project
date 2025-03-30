import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface Products {
    id:number,
    name: string,
    img: string,
    price:number,
}

interface CartState {
    items: Products[];
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addTocart: (state , action: PayloadAction<Products>)=>{
            state.items.push(action.payload);
            state.totalPrice = state.items.reduce((total , item)=> total + item.price , 0)
        },
        removeFromCart: (state , action: PayloadAction<number>)=>{
            state.items = state.items.filter(item => item.id !== action.payload);
            state.totalPrice = state.items.reduce((total , item)=> total + item.price , 0)
        }
    }
});

export const {addTocart , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
