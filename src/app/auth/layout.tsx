import { auth } from '@/src/auth.config'
import { redirect } from 'next/navigation'

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await auth()

	if (session?.user) {
		redirect('/')
	}

	return (
		<main className="flex items-center justify-center">
			<div className="w-full px-10 sm:w-[350px]">{children}</div>
		</main>
	)
}
