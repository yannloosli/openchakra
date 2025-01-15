import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import ColorsControl from 'src/components/inspector/controls/ColorsControl'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'

const SwitchPanel = () => {
  const { setValueFromEvent } = useForm()
  const size = usePropsSelector('size')

  return (
    <>
      <SwitchControl label="Checked" name="isChecked" />

      <FormControl label="Size" htmlFor="size">
        <Select
          name="size"
          id="size"
          size="sm"
          value={size || ''}
          onChange={setValueFromEvent}
        >
          <option>sm</option>
          <option>md</option>
          <option>lg</option>
        </Select>
      </FormControl>

      <ColorsControl label="Color" name="colorScheme" />
    </>
  )
}

export default memo(SwitchPanel)
