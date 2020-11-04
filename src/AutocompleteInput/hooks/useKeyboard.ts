import React, { useCallback } from 'react'

export const useKeyboard = (
  inputValue: string,
  optionIndex: number | null,
  setOptionIndex: (index: number | null) => void,
  options: { value: string; html: string }[],
  handleOptionSelect: (value: string | null) => void,
  isMenuOpened: boolean,
  handleMenuOpen: () => void,
  handleMenuClose: () => void
): ((e: React.KeyboardEvent) => void) => {
  return useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'Escape': {
          if (isMenuOpened) {
            e.preventDefault()
            handleMenuClose()
            setOptionIndex(null)
          } else if (inputValue) {
            e.preventDefault()
            handleOptionSelect(null)
          }
          break
        }

        case 'Enter': {
          if (options.length > 0 && isMenuOpened && optionIndex !== null) {
            e.preventDefault()
            handleMenuClose()
            setOptionIndex(null)
            handleOptionSelect(options[optionIndex].value)
          }
          break
        }

        case 'ArrowUp': {
          if (options.length > 0) {
            e.preventDefault()
            if (!isMenuOpened) {
              handleMenuOpen()
              setOptionIndex(options.length - 1)
            } else if (optionIndex === null) {
              setOptionIndex(options.length - 1)
            } else {
              setOptionIndex(optionIndex - 1 < 0 ? options.length - 1 : optionIndex - 1)
            }
          }
          break
        }

        case 'ArrowDown': {
          if (options.length > 0) {
            e.preventDefault()
            if (!isMenuOpened) {
              handleMenuOpen()
              setOptionIndex(0)
            } else if (optionIndex === null) {
              setOptionIndex(0)
            } else {
              setOptionIndex(optionIndex + 1 > options.length - 1 ? 0 : optionIndex + 1)
            }
          }
          break
        }
      }
    },
    [
      options,
      optionIndex,
      isMenuOpened,
      inputValue,
      handleMenuOpen,
      handleMenuClose,
      setOptionIndex,
      handleOptionSelect,
    ]
  )
}
