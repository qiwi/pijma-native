import { App } from '@pijma/kashka'
import React from 'react'
import { AppRegistry } from 'react-native'

import app from './app.json'
import config from './kashka.config.js'

AppRegistry.registerComponent(app.name, () => () => <App config={config} />)
