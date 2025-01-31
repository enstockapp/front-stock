'use client'
import Link from 'next/link'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { logout } from '@/src/actions/auth'
import {
	ListItem,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from './navigation-menu'
import { SidebarTrigger } from '../sidebar'

export const TopMenu = () => {
	return (
		<NavigationMenu className="justify-between px-2 py-2 lg:justify-end">
			<SidebarTrigger
				className={`${navigationMenuTriggerStyle()} block lg:hidden`}
			/>
			<NavigationMenuList className="space-x-2">
				{/* Add sell */}
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Agregar venta
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{/* Profile */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className="">
						<IoPersonCircleOutline className="h-5 w-5" />
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="p-1 md:w-[180px]">
							<ListItem title="Perfil"></ListItem>
							<ListItem title="Ajustes"></ListItem>
							<ListItem
								title="Cerrar sesión"
								onClick={() => logout()}
							></ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}
