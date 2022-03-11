import { Modal as RNModal, ModalProps as RNModalProps } from 'react-native'

import { styled, StyledProps } from '../../styled'
import { ViewStyle, viewStyles } from '../../styles'

export type ModalProps = StyledProps<RNModalProps, ViewStyle>

export const Modal = styled<ModalProps>(RNModal, viewStyles)
