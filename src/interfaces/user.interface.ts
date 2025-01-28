import { PermissionEnum, RoleEnum } from '../enums'
import { Client } from './client.interface'

export interface User {
	id: string
	email: string
	name: string
	lastname: string
	clientId: string
	client?: Client
	createdAt?: Date
	updatedAt?: Date
	roles?: RoleEnum[]
	permissions?: PermissionEnum[]
}
