import React from 'react';
import queryKeys from '../constants/queries';
import TanentInfoService from '../services/api/tanentInfo.service';
import { useQuery } from 'react-query';

const useTanentInfo = () => {
	const useGetSettingsData = () => {
		return useQuery({
			queryKey: [queryKeys.user.GET_SETTINGS],
			queryFn: () => TanentInfoService.getTanentInfo(),
			onSuccess: (data) => {
				return data;
			},
			onError: (error) => {
				console.error('Error fetching tanent info:', error);
			},
		});
	};
	return { useGetSettingsData };
};

export default useTanentInfo;
