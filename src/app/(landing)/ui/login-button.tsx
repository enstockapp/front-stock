'use client'

export const LoginButton = () => {
	const goLoginPage = () => {
		window.location.replace('/auth/login')
	}
	return <button onClick={() => goLoginPage()}>Ingresa</button>
}
