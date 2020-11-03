import React, { useCallback, useRef, useState } from 'react'
import { useLatest, useUpdateEffect } from 'react-use'

export const useInput = (value?: string, onValueChange?: (value: string) => void, defaultValue: string = ''): [value: string, setValue: (value: string) => void, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [inputValue, setInputValue] = useState<string>(value ?? defaultValue)
  const valueRef = useRef<string>(value ?? defaultValue)
  const handleChange = useLatest(onValueChange)

  const setValue = useCallback((value: string) => {
    valueRef.current = value
    setInputValue(value)
  }, [])

  // notifying on change to the outside
  useUpdateEffect(() => {
    handleChange.current?.(inputValue)
  }, [inputValue])

  // updating on change from the outside
  useUpdateEffect(() => {
    if (value !== undefined && value !== valueRef.current) {
      setValue(value)
    }
  }, [value])

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  return [inputValue, setValue, onChange]
}