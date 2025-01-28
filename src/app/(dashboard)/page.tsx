'use client'

import { logout } from '@/src/actions/auth/logout'

export default function DashboardPage() {
	return (
		<div>
			<h1>DashboardPage</h1>
			<button onClick={() => logout()} className="border border-cyan-50 p-4">
				Logout
			</button>
		</div>
	)
}
