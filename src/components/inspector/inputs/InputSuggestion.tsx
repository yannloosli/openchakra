import React, { useState, ReactNode } from 'react'
import { Combobox } from '@headlessui/react'
import { Input } from '@chakra-ui/react'
import { useForm } from '~hooks/useForm'

type FormControlPropType = {
  handleChange: any
  value: any
  name: string
  children: ReactNode
}

const ltrim = (value: string) => {
  if (!value) return value
  return value.replace(/^\s+/g, '')
}

const InputSuggestion: React.FC<FormControlPropType> = ({
  handleChange,
  name,
  value,
  children,
}) => {
  const { setValue } = useForm()
  const [isFocus, setIsFocus] = useState(false)

  return (
    <Combobox
      onChange={item => {
        setValue(name, item)
      }}
      value={ltrim(value)}
    >
      <Combobox.Input
        onFocus={() => setIsFocus(true)}
        id={name}
        value={ltrim(value)}
        name={name}
        onChange={handleChange}
        as={Input}
        autoComplete="off"
      />

      {isFocus && (
          <Combobox.Options
            style={{ maxHeight: 200, overflow: 'scroll' }}
            aria-labelledby={name}
          >
            {children}
          </Combobox.Options>
      )}
    </Combobox>
  )
}

export default InputSuggestion
