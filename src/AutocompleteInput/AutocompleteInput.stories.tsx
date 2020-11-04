import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react'
import AutocompleteInput from './AutocompleteInput'
import { FRUITS_OPTIONS } from './fixtures'

const Wrapper = styled.div`
  width: 400px;
  margin-top: -140px;
`

export default {
  title: 'AutocompleteInput',
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} as Meta

export const Default = () => (
  <AutocompleteInput options={FRUITS_OPTIONS} placeholder="Start typing “Apple” or “Orange” name…" />
)
