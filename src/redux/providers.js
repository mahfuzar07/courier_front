'use client';
import { Provider } from 'react-redux';
import { reduxStore } from './store';

export const Providers = ({ children }) => {
	return <Provider store={reduxStore}>{children}</Provider>;
};
