'use client'

import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'

import clsx from 'clsx'
import { authenticate } from '@/src/actions/auth/login'

export const LoginForm = () => {
	const [state, dispatch, isPending] = useActionState(authenticate, undefined)

	useEffect(() => {
		if (state === 'Success') {
			window.location.replace('/')
		}
	}, [state])

	return (
		<form action={dispatch} className="flex flex-col">
			<label htmlFor="email">Correo</label>
			<input
				className="mb-5 rounded border bg-gray-200 px-5 py-2"
				type="email"
				name="email"
			/>

			<label htmlFor="email">Contraseña</label>
			<input
				className="mb-5 rounded border bg-gray-200 px-5 py-2"
				type="password"
				name="password"
			/>

			<div
				className="flex h-8 items-end space-x-1"
				aria-live="polite"
				aria-atomic="true"
			>
				{state === 'CredentialsSignin' && (
					<div className="mb-2 flex flex-row">
						{/* <IoInformationOutline className="h-5 w-5 text-red-500" /> */}
						<p className="text-sm text-red-500">Credenciales invalidas</p>
					</div>
				)}
			</div>

			{isPending ? <>Loading...</> : <LoginButton />}
		</form>
	)
}

function LoginButton() {
	const { pending } = useFormStatus()

	return (
		<button
			type="submit"
			className={clsx({
				'btn-primary': !pending,
				'btn-disabled': pending,
			})}
			disabled={pending}
		>
			Login
		</button>
	)
}
