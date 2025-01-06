export interface IModalAppState {
	isOpen?: boolean
	text?: string
	onConfirm: () => void
	onCancel: () => void
}

export interface InitAppStateInterface {
	wasLogout: boolean
	modal: IModalAppState
}
