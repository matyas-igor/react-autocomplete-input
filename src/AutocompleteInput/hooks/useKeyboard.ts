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
  // According to: https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html#kbd_label
  return useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        // close menu if it's open, otherwise clear the input
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

        // select chosen option
        case 'Enter': {
          if (options.length > 0 && isMenuOpened && optionIndex !== null) {
            e.preventDefault()
            handleMenuClose()
            handleOptionSelect(options[optionIndex].value)
          }
          break
        }

        // open menu if needed, select previous or last item
        case 'ArrowUp': {
          if (options.length > 0) {
            e.preventDefault()
            if (!isMenuOpened) {
              handleMenuOpen()
            }
            if (optionIndex === null) {
              setOptionIndex(options.length - 1)
            } else {
              setOptionIndex(optionIndex - 1 < 0 ? options.length - 1 : optionIndex - 1)
            }
          }
          break
        }

        // open menu if needed, select next or first item
        case 'ArrowDown': {
          if (options.length > 0) {
            e.preventDefault()
            if (!isMenuOpened) {
              handleMenuOpen()
            }
            if (optionIndex === null) {
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
