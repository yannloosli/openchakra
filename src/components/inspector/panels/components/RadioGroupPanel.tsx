import React, { memo } from 'react'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import { Input } from '@chakra-ui/react'
import { useForm } from 'src/hooks/useForm'
import FormControl from 'src/components/inspector/controls/FormControl'

const RadioGroupPanel = () => {
  const { setValueFromEvent } = useForm()
  const spacing = usePropsSelector('spacing')

  return (
    <>
      <FormControl label="Spacing">
        <Input
          size="sm"
          value={spacing || ''}
          name="spacing"
          onChange={setValueFromEvent}
        />
      </FormControl>
      <SwitchControl label="Inline" name="isInline" />
    </>
  )
}

export default memo(RadioGroupPanel)
