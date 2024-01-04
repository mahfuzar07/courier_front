import { BaseApiUrl } from '../../config/config';
import { api, authApi } from '../interceptor/auth.interceptor';
import { apiEndpoint } from '../apiEndpoint';

class AuthService {
	static async register(formData) {
		return await api.post(BaseApiUrl + apiEndpoint.signupUrl, formData).then((response) => {
			return response?.data;
		});
	}

	static async signIn(formData) {
		return await api.post(BaseApiUrl + apiEndpoint.signIn, formData).then((response) => {
			return response?.data;
		});
	}
	static async getUser(formData) {
		return await authApi.get(BaseApiUrl + apiEndpoint.getUser, formData).then((response) => {
			return response?.data;
		});
	}

	static async createOrganization(formData, headers) {
		return await api.post('/' + apiPrefix + '/user/create-tanent', formData, headers).then((response) => {
			return response?.data;
		});
	}

	static async CreatePackage(formData) {
		return await authApi.post(BaseApiUrl + apiEndpoint.superAdminPacakge, formData).then((response) => {
			return response?.data;
		});
	}
	static async DeletePackage(id) {
		return await authApi.delete(BaseApiUrl + apiEndpoint.superAdminPacakge + '/' + id).then((response) => {
			return response?.data;
		});
	}

	static async forgotPassword(formData) {
		return await api.post(BaseApiUrl + apiEndpoint.forgot_password, formData).then((response) => {
			return response?.data;
		});
	}
}

export default AuthService;
