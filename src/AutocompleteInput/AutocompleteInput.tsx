import React, { useCallback, useState } from 'react'
import { useUpdateEffect } from 'react-use'
import { useInput } from './hooks/useInput'
import { useSearch } from './hooks/useSearch'
import { StyledInput, StyledLabel, StyledWrapper } from './styled'
import { useFlag } from './hooks/useFlag'
import { useKeyboard } from './hooks/useKeyboard'
import AutocompleteInputList from './components/AutocompleteInputList'

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
  const [inputValue, setInputValue, onInputChange] = useInput(value, onValueChange, defaultValue)
  const [isMenuOpened, handleMenuOpen, handleMenuClose] = useFlag()
  const [optionIndex, setOptionIndex] = useState<number | null>(null)

  // handle fuzzy options search
  const displayedOptions = useSearch(inputValue, options)

  // handle clearing selected option on options change
  useUpdateEffect(() => {
    setOptionIndex(null)
  }, [displayedOptions])

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

  // handle keyboard press processing
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

  // handle change event from input
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onInputChange(e)
      handleMenuOpen()
    },
    [handleMenuOpen, onInputChange]
  )

  // handle blur event on input
  const onBlur = useCallback(() => {
    handleMenuClose()
    setOptionIndex(null)
  }, [handleMenuClose, setOptionIndex])

  return (
    <>
      <StyledLabel id={`${id}-label`}>{label}</StyledLabel>
      <StyledWrapper>
        <div
          role="combobox"
          aria-expanded={isMenuOpened ? 'true' : 'false'}
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
                ? displayedOptions[optionIndex].value
                : inputValue
            }
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={handleMenuOpen}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        </div>
        <AutocompleteInputList
          id={id}
          options={displayedOptions}
          optionIndex={optionIndex}
          isOpened={isMenuOpened}
          setOptionIndex={setOptionIndex}
          handleOptionSelect={handleOptionSelect}
        />
      </StyledWrapper>
    </>
  )
}

export default AutocompleteInput
