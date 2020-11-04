import React from 'react'
import { StyledItem, StyledUl } from '../styled'

const OPTION_HEIGHT = 48

type Props = {
  id: string
  options: { value: string; html: string }[]
  optionIndex: number | null
  isOpened: boolean
  setOptionIndex: (index: number | null) => void
  handleOptionSelect: (value: string | null) => void
}

const AutocompleteInputList = ({ id, options, optionIndex, isOpened, setOptionIndex, handleOptionSelect }: Props) => {
  return (
    <StyledUl role="listbox" aria-labelledby={`${id}-label`} id={`${id}-listbox`} aria-label="Suggestions">
      {isOpened && options.length > 0
        ? options.map((option, idx) => (
            <StyledItem
              key={idx}
              $hovered={idx === optionIndex}
              role="option"
              aria-selected={idx === optionIndex ? 'true' : 'false'}
              onMouseOver={() => setOptionIndex(idx)}
              onMouseOut={() => setOptionIndex(null)}
              onMouseDown={() => handleOptionSelect(option.value)}
              dangerouslySetInnerHTML={{ __html: option.html }}
            />
          ))
        : null}
    </StyledUl>
  )
}

export default AutocompleteInputList
