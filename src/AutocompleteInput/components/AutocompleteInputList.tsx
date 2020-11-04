import React from 'react'
import VirtualList, { ScrollAlignment, ScrollDirection } from 'react-small-virtual-list'
import { StyledItem, StyledUl } from '../styled'

const MAX_OPTIONS_AMOUNT = 5
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
  const maxHeight = Math.min(options.length, MAX_OPTIONS_AMOUNT) * OPTION_HEIGHT
  return (
    <StyledUl role="listbox" aria-labelledby={`${id}-label`} id={`${id}-listbox`} aria-label="Suggestions">
      {isOpened && options.length > 0 ? (
        <VirtualList
          width="100%"
          height={maxHeight}
          itemCount={options.length}
          itemSize={OPTION_HEIGHT}
          renderItem={({ index, style }) => (
            <StyledItem
              key={index}
              style={style}
              $hovered={index === optionIndex}
              role="option"
              aria-selected={index === optionIndex ? 'true' : 'false'}
              onMouseOver={() => setOptionIndex(index)}
              onMouseOut={() => setOptionIndex(null)}
              onMouseDown={() => handleOptionSelect(options[index].value)}
              dangerouslySetInnerHTML={{ __html: options[index].html }}
            />
          )}
          scrollDirection={ScrollDirection.VERTICAL}
          scrollToAlignment={ScrollAlignment.SMART}
          scrollToIndex={optionIndex !== null ? optionIndex : undefined}
          overscanCount={2}
        />
      ) : null}
    </StyledUl>
  )
}

export default AutocompleteInputList
