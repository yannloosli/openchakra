import React, { memo } from 'react'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SizeControl from 'src/components/inspector/controls/SizeControl'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import { Select } from '@chakra-ui/react'
import FormControl from 'src/components/inspector/controls/FormControl'

const ModalPanel = () => {
  const { setValueFromEvent } = useForm()
  const size = usePropsSelector('size')
  const motionPreset = usePropsSelector('motionPreset')

  return (
    <>
      <SwitchControl label="Show Preview" name="showpreview" />
      <SwitchControl label="Open" name="isOpen" />
      <SwitchControl label="Centered" name="isCentered" />
      <FormControl htmlFor="motionPreset" label="Transition">
        <Select
          id="motionPreset"
          onChange={setValueFromEvent}
          name="motionPreset"
          size="sm"
          value={motionPreset || ''}
        >
          <option>scale</option>
          <option>slideInBottom</option>
          <option>slideInRight</option>
          <option>none</option>
        </Select>
      </FormControl>

      <SizeControl
        label="Size"
        options={['xs', 'sm', 'md', 'lg', 'xl']}
        value={size}
      />
    </>
  )
}

export default memo(ModalPanel)
