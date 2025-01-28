import NextAuth, { type NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { login } from './services/auth.service'
import { signInSchema } from './lib/zod'

export const authConfig: NextAuthConfig = {
	pages: {
		signIn: '/auth/login',
	},

	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'user@mail.com' },
				password: { label: 'Password', type: 'password', placeholder: '*****' },
			},
			async authorize(credentials, req) {
				try {
					const { email, password } = await signInSchema.parseAsync(credentials)
					const authReponse = await login(email, password)

					// Verifica que el token exista en la respuesta
					if (authReponse.token) {
						return {
							// ...data.user,
							id: authReponse.user.id,
							user: authReponse.user,
							token: authReponse.token,
						}
					}

					return null
				} catch (error) {
					// console.error('Authorization error:', error)
					return null
				}
			},
		}),
	],

	callbacks: {
		async authorized({ auth, request: { nextUrl } }) {
			// console.log('***authorized***', { auth })
			return true
		},
		async jwt({ token, user, account, profile }) {
			// console.log('***jwt***', { token, user, account, profile })
			if (user) {
				token.data = user
			}

			return token
		},
		async session({ session, token, user, ...rest }) {
			// console.log('***session***', { session, token, user, rest })
			return {
				...session,
				user: {
					...session.user,
					...token,
				},
			}
		},
	},
}

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig)
