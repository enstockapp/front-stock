import { AuthResponse } from '../interfaces'
import ApiAdapter from '../lib/api.adapter'

const API_URL = process.env.API_URL ?? ''

const api = new ApiAdapter(API_URL)
const service = 'AuthService'

export const login = async (
	email: string,
	password: string,
): Promise<AuthResponse> => {
	try {
		const data = await api.post('auth/login', null, { email, password }, {})
		return data as AuthResponse
	} catch (error) {
		throw new Error(`[${service}]: ${error}`)
	}
}
