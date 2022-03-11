import { View as RNView } from 'react-native'

import { ViewProps } from '../../props'
import { styled } from '../../styled'
import { viewStyles } from '../../styles'

export const View = styled<ViewProps>(RNView, viewStyles)
