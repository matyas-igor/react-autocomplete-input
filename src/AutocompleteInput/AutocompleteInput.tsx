import React from 'react'
import { useInput } from './hooks/useInput'
import { useSearch } from './hooks/useSearch'
import { StyledInput, StyledItem, StyledLabel, StyledUl, StyledWrapper } from './styled'

type Props = {
  id?: string
  label?: string
  options?: string[]

  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  placeholder?: string
}

const AutocompleteInput = ({
  id = 'autocomplete',
  label,
  value,
  onValueChange,
  defaultValue,
  options = [],
  placeholder,
}: Props) => {
  const [inputValue, , onChange] = useInput(value, onValueChange, defaultValue)
  const displayOptions = useSearch(inputValue, options)
  return (
    <>
      <StyledLabel id={`${id}-label`}>{label}</StyledLabel>
      <StyledWrapper>
        <div
          role="combobox"
          aria-expanded="false"
          aria-haspopup="listbox"
          aria-owns={`${id}-listbox`}
          id={`${id}-combobox`}
        >
          <StyledInput
            type="text"
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls={`${id}-listbox`}
            aria-labelledby={`${id}-label`}
            id={`${id}-input`}
            value={inputValue}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
        <StyledUl role="listbox" aria-labelledby={`${id}-label`} id={`${id}-listbox`} aria-label="Suggestions">
          {displayOptions.length > 0
            ? displayOptions.map((option, idx) => (
                <StyledItem role="option" aria-selected="false" dangerouslySetInnerHTML={{ __html: option }} />
              ))
            : null}
        </StyledUl>
      </StyledWrapper>
    </>
  )
}

export default AutocompleteInput
