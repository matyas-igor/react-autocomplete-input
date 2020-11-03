import React from 'react'
import { Meta } from '@storybook/react'
import AutocompleteInput from './AutocompleteInput'
import { FRUITS_OPTIONS } from './fixtures'

export default {
  title: 'AutocompleteInput',
  parameters: { layout: 'centered' },
} as Meta

export const Default = () => (
  <div>
    <AutocompleteInput options={FRUITS_OPTIONS} />
  </div>
)
