import { Currency, IdentificationType } from '../enums'

export interface Client {
	id: string
	name: string
	lastname: string
	identificationType: IdentificationType
	identification: string
	email: string
	phoneNumber: string
	direction: string
	mainCurrency: Currency
	isActive: boolean
	createdAt: Date
	updatedAt: Date
}
