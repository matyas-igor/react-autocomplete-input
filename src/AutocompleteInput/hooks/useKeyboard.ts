import React, { useCallback, useState } from 'react'
import { useUpdateEffect } from 'react-use'

export const useKeyboard = (
  inputValue: string,
  optionIndex: number | null,
  setOptionIndex: (index: number | null) => void,
  options: { text: string; html: string }[],
  handleOptionSelect: (value: string | null) => void,
  isMenuOpened: boolean,
  handleMenuOpen: () => void,
  handleMenuClose: () => void
): ((e: React.KeyboardEvent) => void) => {
  const onKeyDown = useCallback(
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
            handleOptionSelect(options[optionIndex].text)
          }
          break
        }

        case 'ArrowUp': {
          if (options.length > 0) {
            e.preventDefault()
            if (!isMenuOpened) {
            } else {
            }
          }
          break
        }

        case 'ArrowDown': {
          if (options.length > 0) {
            e.preventDefault()
            if (!isMenuOpened) {
            } else {
            }
          }
          break
        }
      }
    },
    [options]
  )

  return onKeyDown
}
