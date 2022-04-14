import { App } from '@pijma/native'
import { AppRegistry } from 'react-native'

import app from './app.json'

AppRegistry.registerComponent(app.name, () => App)
