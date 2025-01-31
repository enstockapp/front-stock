import { AppSidebar, SidebarProvider, TopMenu } from '@/src/components'

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="min-h-screen w-full">
				<TopMenu />
				<div className="px-0 sm:px-10">{children}</div>
			</main>
		</SidebarProvider>
	)
}
