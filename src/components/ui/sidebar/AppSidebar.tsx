import { JSX } from 'react'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
} from './sidebar'
import { IMenuItem, sidebarGroups, settingsItem } from './constants'

const SidebarMenuItemCustom = (item: Readonly<IMenuItem>): JSX.Element => {
	return (
		<SidebarMenuItem key={item.title}>
			<SidebarMenuButton asChild>
				<a href={item.url}>
					<item.icon />
					<span>{item.title}</span>
				</a>
			</SidebarMenuButton>
		</SidebarMenuItem>
	)
}

function AppSidebar() {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>
				<SidebarTrigger />
			</SidebarHeader>
			<SidebarContent>
				{sidebarGroups.map((element) => (
					<SidebarGroup key={`sidebar-group-${element.title}`}>
						<SidebarGroupLabel>{element.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{element.items.map((item) => SidebarMenuItemCustom(item))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarFooter className="mb-2">
				<SidebarMenu>{SidebarMenuItemCustom(settingsItem)}</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}

export { AppSidebar }
