'use server'

import { signOut } from '@/src/auth.config'

export const logout = async (): Promise<void> => {
	await signOut({ redirectTo: '/auth/login' })
}
