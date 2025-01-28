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
	SidebarProvider,
	SidebarTrigger,
} from './sidebar'
import {
	FaTruckRampBox,
	FaHouse,
	FaBoxesStacked,
	FaBoxOpen,
	FaShop,
} from 'react-icons/fa6'
import { IoPerson, IoSettingsSharp } from 'react-icons/io5'
import { MdCategory, MdOutlineShoppingCartCheckout } from 'react-icons/md'
import { BiSolidCategory } from 'react-icons/bi'
import type { IconType } from 'react-icons/lib'
import { JSX } from 'react'

interface IMenuItem {
	title: string
	url: string
	icon: IconType
}

interface ISidebarGroup {
	title: string
	items: IMenuItem[]
}

// Menu items.
const sidebarGroups: ISidebarGroup[] = [
	{
		title: 'Dashboard',
		items: [
			{
				title: 'Home',
				url: '#',
				icon: FaHouse,
			},
		],
	},
	{
		title: 'Inventario',
		items: [
			{
				title: 'Inventario actual',
				url: '#',
				icon: FaBoxesStacked,
			},
			{
				title: 'Ajustes de inventario',
				url: '#',
				icon: FaBoxOpen,
			},
			{
				title: 'Compras',
				url: '#',
				icon: FaTruckRampBox,
			},
			{
				title: 'Ventas',
				url: '#',
				icon: MdOutlineShoppingCartCheckout,
			},
			{
				title: 'Categorías',
				url: '#',
				icon: MdCategory,
			},
			{
				title: 'Variantes',
				url: '#',
				icon: BiSolidCategory,
			},
		],
	},
	{
		title: 'Contactos',
		items: [
			{
				title: 'Proveedores',
				url: '#',
				icon: FaShop,
			},
			{
				title: 'Clientes',
				url: '#',
				icon: IoPerson,
			},
		],
	},
]

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
			<SidebarHeader />
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
				<SidebarMenu>
					{SidebarMenuItemCustom({
						title: 'Ajustes',
						url: '#',
						icon: IoSettingsSharp,
					})}
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}

export { AppSidebar, SidebarProvider, SidebarTrigger }
