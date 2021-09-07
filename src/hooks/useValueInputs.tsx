import { useState, useEffect } from 'react'

const useInputValue = (initialState:any) => {
    console.log('useInputValue')
  const [valueInput, setValueInput] = useState(initialState)
  useEffect(() => {
      setValueInput(initialState)
  }, [initialState])
  const onChange = (event:any) => {
    console.log('useInputValue')
    setValueInput(event.target.value)
  }
  return {
    valueInput, onChange,
  }
}

export default useInputValue