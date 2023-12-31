import { BaseApiUrl, apiPrefix } from '../../config/config';
import { api, authApi } from '../interceptor/auth.interceptor';
import { apiUrl } from '../apiEndpoint';

class TanentInfoService {
	static async getTanentInfo() {
		return await authApi.get(BaseApiUrl + apiUrl.tenantInfo).then((response) => {
			console.log('respons', response);
			return response?.data;
		});
	}
}

export default TanentInfoService;
