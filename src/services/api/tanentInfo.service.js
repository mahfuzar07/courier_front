import { api, authApi } from '../interceptor/auth.interceptor';
import { apiEndpoint } from '../apiEndpoint';
import { baseUrl } from '@/config/config.example';

class TanentInfoService {
	static async getTanentInfo() {
		return await authApi.get(baseUrl + apiEndpoint.tenantInfo).then((response) => {
			console.log('respons', response);
			return response?.data;
		});
	}

	static async getTanentAdminInfo() {
		return await authApi.get(baseUrl + apiEndpoint.tenantAdminDashboard).then((response) => {
			return response?.data;
		});
	}
}

export default TanentInfoService;
