import { App } from '@pijma/kashka'
import React from 'react'
import { render } from 'react-dom'

// eslint-disable-next-line import/no-webpack-loader-syntax
import config from '!@pijma/kashka/loader.cjs!../kashka.config.js'

render(<App config={config} />, document.querySelector('#root'))
