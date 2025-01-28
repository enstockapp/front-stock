import { AppSidebar, SidebarProvider, SidebarTrigger } from '@/src/components'

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="min-h-screen">
				{/* <TopMenu /> */}
				<SidebarTrigger />
				{/* {children} */}

				<div className="px-0 sm:px-10">{children}</div>

				{/* <Footer /> */}
			</main>
		</SidebarProvider>
	)
}
