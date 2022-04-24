/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../App'
import { render } from '@testing-library/react-native'
import { cleanup } from '@testing-library/react-native'

// Note: test renderer must be required after react-native.

afterEach(cleanup)

it('renders correctly', () => {
  render(<App />)
})
