import styled from 'styled-components'
import { useAppSelector } from '../../shared/hooks/store'
import { Button } from '../../shared/ui'

const ModalContainer = ({ className }) => {
	const modalState = useAppSelector(state => state.app.modal)

	const { isOpen, text, onConfirm, onCancel } = modalState

	if (!isOpen) {
		return null
	}

	return (
		<div className={className}>
			<div className='overlay'></div>
			<div className='box'>
				<h3>{text}</h3>
				<div className='buttons'>
					<Button width={120} onClick={onConfirm}>
						Да
					</Button>
					<Button width={120} onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	)
}

export const Modal = styled(ModalContainer)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 20;

	& .overlay {
		position: absolute;
		background-color: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
	}

	& .box {
		position: relative;
		width: 400px;
		margin: 0 auto;
		text-align: center;
		z-index: 30;
		top: 50%;
		transform: translate(0, -50%);

		background-color: #fff;
		border: 2px solid #000;
		padding: 0 20px 20px;

		h3 {
			margin: 20px 0;
		}
	}

	& .buttons {
		display: flex;
		justify-content: center;

		button {
			margin: 0 5px;
		}
	}
`
