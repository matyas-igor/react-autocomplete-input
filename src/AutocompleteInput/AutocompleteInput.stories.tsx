import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react'
import AutocompleteInput from './AutocompleteInput'
import { DOCTORS_OPTIONS, FRUITS_OPTIONS } from './fixtures'

const StyledWrapper = styled.div`
  width: 400px;
  margin-top: -140px;
`
const StyledForm = styled.form`
  width: 100%;
  margin: 0;
`

export default {
  title: 'AutocompleteInput',
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <StyledWrapper>
        <Story />
      </StyledWrapper>
    ),
  ],
} as Meta

export const Default = () => (
  <AutocompleteInput options={FRUITS_OPTIONS} placeholder="Start typing “Apple” or “Orange”…" />
)

export const Controlled = () => {
  const [value, setValue] = useState<string>('')
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Submitted: ${value}`)
      }}
    >
      <AutocompleteInput
        value={value}
        onValueChange={setValue}
        onOptionSelect={(selectedValue) => {
          alert(`Selected: ${selectedValue}`)
        }}
        options={DOCTORS_OPTIONS}
        placeholder="Start typing “Neuro” or “Surgery”…"
      />
    </StyledForm>
  )
}
