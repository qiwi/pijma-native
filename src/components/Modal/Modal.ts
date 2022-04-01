import { Modal as RNModal, ModalProps as RNModalProps } from 'react-native'

import { styled, StyledProps, ViewStyle } from '../../styled'

export type ModalProps = StyledProps<RNModalProps, ViewStyle>

export const Modal = styled<ModalProps>(RNModal, { style: 'view' })
