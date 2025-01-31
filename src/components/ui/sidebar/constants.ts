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
import { routesPath } from '@/src/constants'

export interface IMenuItem {
	title: string
	url: string
	icon: IconType
}

export interface ISidebarGroup {
	title: string
	items: IMenuItem[]
}

export const settingsItem = {
	title: 'Ajustes',
	url: routesPath.settings,
	icon: IoSettingsSharp,
}

// Menu items.
export const sidebarGroups: ISidebarGroup[] = [
	{
		title: 'Dashboard',
		items: [
			{
				title: 'Home',
				url: routesPath.home,
				icon: FaHouse,
			},
		],
	},
	{
		title: 'Inventario',
		items: [
			{
				title: 'Inventario actual',
				url: routesPath.inventory,
				icon: FaBoxesStacked,
			},
			{
				title: 'Ajustes de inventario',
				url: routesPath.inventoryAdjustment,
				icon: FaBoxOpen,
			},
			{
				title: 'Compras',
				url: routesPath.purchases,
				icon: FaTruckRampBox,
			},
			{
				title: 'Ventas',
				url: routesPath.sales,
				icon: MdOutlineShoppingCartCheckout,
			},
			{
				title: 'Categorías',
				url: routesPath.categories,
				icon: MdCategory,
			},
			{
				title: 'Variantes',
				url: routesPath.variants,
				icon: BiSolidCategory,
			},
		],
	},
	{
		title: 'Contactos',
		items: [
			{
				title: 'Proveedores',
				url: routesPath.suppliers,
				icon: FaShop,
			},
			{
				title: 'Clientes',
				url: routesPath.customers,
				icon: IoPerson,
			},
		],
	},
]
