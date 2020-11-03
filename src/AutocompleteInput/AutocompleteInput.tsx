import React, { useMemo } from 'react'
import { useInput } from './hooks/useInput'
import { useSearch } from './hooks/useSearch'

type Props = {
  id?: string
  label?: string
  options?: string[]

  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
}

const AutocompleteInput = ({ id = 'autocomplete', label, value, onValueChange, defaultValue, options = [] }: Props) => {
  const [inputValue, setInputValue, onChange] = useInput(value, onValueChange, defaultValue)
  const displayOptions = useSearch(inputValue, options)
  return (
    <>
      <label id={`${id}-label`}>{label}</label>
      <div>
        <div
          role="combobox"
          aria-expanded="false"
          aria-haspopup="listbox"
          aria-owns={`${id}-listbox`}
          id={`${id}-combobox`}
        >
          <input
            type="text"
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls={`${id}-listbox`}
            aria-labelledby={`${id}-label`}
            id={`${id}-input`}
            value={inputValue}
            onChange={onChange}
          />
        </div>
        <ul role="listbox" aria-labelledby={`${id}-label`} id={`${id}-listbox`} aria-label="Suggestions">
          {displayOptions.length > 0 ? displayOptions.map((option, idx) => (
            <div role="option" aria-selected="false" dangerouslySetInnerHTML={{ __html: option }} />
          )) : null}
        </ul>
      </div>
    </>
  )
}

export default AutocompleteInput
