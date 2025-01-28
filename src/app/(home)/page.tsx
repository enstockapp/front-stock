'use client'

import { logout } from '@/src/actions/auth/logout'

export default function HomePage() {
	return (
		<div>
			<h1>HomePage</h1>
			<button onClick={() => logout()} className="border border-cyan-50 p-4">
				Logout
			</button>
		</div>
	)
}
