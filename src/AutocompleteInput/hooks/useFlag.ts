import { useCallback, useState } from 'react'

export const useFlag = (defaultFlag: boolean = false): [flag: boolean, setOn: () => void, setOff: () => void] => {
  const [flag, setFlag] = useState<boolean>(defaultFlag)
  const setOn = useCallback(() => setFlag(true), [])
  const setOff = useCallback(() => setFlag(false), [])
  return [flag, setOn, setOff]
}
