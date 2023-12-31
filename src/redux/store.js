import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import taskReducer from './slices/taskSlice';

export const reduxStore = configureStore({
	reducer: {
		counter: counterReducer,
		task: taskReducer,
	},
});
