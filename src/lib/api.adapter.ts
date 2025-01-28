class ApiAdapter {
	token: string | null

	constructor(public baseURL: string) {
		this.baseURL = baseURL
		this.token = null
	}

	async get(endpoint: string, token: string, options = {}): Promise<any> {
		if (token) this.setToken(token)
		return this.request(endpoint, { ...options, method: 'GET' })
	}

	async post(endpoint: string, token: string | null, body: any, options = {}) {
		if (token) this.setToken(token)
		return this.request(endpoint, {
			...options,
			method: 'POST',
			body: JSON.stringify(body),
		})
	}

	async patch(endpoint: string, token: string, body: any, options = {}) {
		if (token) this.setToken(token)
		return this.request(endpoint, {
			...options,
			method: 'PATCH',
			body: JSON.stringify(body),
		})
	}

	async delete(endpoint: string, token: string, options = {}) {
		if (token) this.setToken(token)
		return this.request(endpoint, { ...options, method: 'DELETE' })
	}

	private setToken(token: string): void {
		this.token = token
	}

	private async request(
		endpoint: string,
		options: RequestInit = {},
	): Promise<any> {
		const url = `${this.baseURL}/${endpoint}`
		const headers: any = {
			'Content-Type': 'application/json',
			...options.headers,
		}

		if (this.token) {
			headers['Authorization'] = `Bearer ${this.token}`
		}

		const response = await fetch(url, { ...options, headers })

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		return response.json()
	}
}

export default ApiAdapter
