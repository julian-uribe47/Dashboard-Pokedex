
import { createSlice, PayloadAction} from '@reduxjs/toolkit'

interface CounterState {
    count: number;
    isready: boolean;
}

const initialState: CounterState = {
    count: 5,
    isready: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initCounterState(state, action: PayloadAction<number>) {
            if(state.isready) return;
            state.count = action.payload;
            state.isready = true;
        },
        addOne(state){
            state.count++;
        },
        substractOne(state) {
            if(state.count === 0) return;
            state.count--;
        },
        resetCount(state, action: PayloadAction<number>) {
            if( action.payload < 0 ) action.payload = 0;
            state.count = action.payload;
        }
    }
});

export const { addOne, substractOne, resetCount, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;