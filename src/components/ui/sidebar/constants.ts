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
	url: '#',
	icon: IoSettingsSharp,
}

// Menu items.
export const sidebarGroups: ISidebarGroup[] = [
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
