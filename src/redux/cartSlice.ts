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
            state.totalPrice += action.payload.price;
        },
        removeFromCart: (state , action: PayloadAction<number>)=>{
            const removeItem = state.items.find(item => item.id === action.payload);
            if(removeItem){
                state.totalPrice -= removeItem.price;
            }
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
});

export const {addTocart , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;