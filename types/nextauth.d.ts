import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			id: string
			name: string
			email: string
			clientId: string
			image?: string
			roles?: string[]
			lastname?: string
			client?: Client
			createdAt?: Date
			updatedAt?: Date
			roles?: RoleEnum[]
			permissions?: PermissionEnum[]
		} & DefaultSession['user']
	}
}
