import React, { useCallback, useState } from 'react'
import { useInput } from './hooks/useInput'
import { useSearch } from './hooks/useSearch'
import { StyledInput, StyledItem, StyledLabel, StyledUl, StyledWrapper } from './styled'
import { useFlag } from './hooks/useFlag'
import { useKeyboard } from './hooks/useKeyboard'

type Props = {
  id?: string
  label?: string
  placeholder?: string

  options?: string[]
  onOptionSelect?: (value: string) => void

  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
}

const AutocompleteInput = ({
  id = 'autocomplete',
  label,
  placeholder,
  value,
  onValueChange,
  defaultValue,
  options = [],
  onOptionSelect,
}: Props) => {
  const [inputValue, setInputValue, onChange] = useInput(value, onValueChange, defaultValue)
  const [isMenuOpened, handleMenuOpen, handleMenuClose] = useFlag()
  const [optionIndex, setOptionIndex] = useState<number | null>(null)
  const displayedOptions = useSearch(inputValue, options)

  // handle selecting/clearing option
  const handleOptionSelect = useCallback(
    (value: string | null) => {
      setInputValue(value || '')
      setOptionIndex(null)
      if (value !== null) {
        onOptionSelect?.(value)
      }
    },
    [onOptionSelect, setInputValue, setOptionIndex]
  )

  // handle selected option index processing
  const onKeyDown = useKeyboard(
    inputValue,
    optionIndex,
    setOptionIndex,
    displayedOptions,
    handleOptionSelect,
    isMenuOpened,
    handleMenuOpen,
    handleMenuClose
  )

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
            value={
              isMenuOpened && optionIndex !== null && displayedOptions[optionIndex]
                ? displayedOptions[optionIndex].text
                : inputValue
            }
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={handleMenuOpen}
            onBlur={handleMenuClose}
            placeholder={placeholder}
          />
        </div>
        <StyledUl role="listbox" aria-labelledby={`${id}-label`} id={`${id}-listbox`} aria-label="Suggestions">
          {isMenuOpened && displayedOptions.length > 0
            ? displayedOptions.map((option, idx) => (
                <StyledItem
                  key={idx}
                  $hovered={idx === optionIndex}
                  role="option"
                  aria-selected="false"
                  onMouseOver={() => setOptionIndex(idx)}
                  onMouseOut={() => setOptionIndex(null)}
                  onMouseDown={() => handleOptionSelect(option.text)}
                  dangerouslySetInnerHTML={{ __html: option.html }}
                />
              ))
            : null}
        </StyledUl>
      </StyledWrapper>
    </>
  )
}

export default AutocompleteInput
