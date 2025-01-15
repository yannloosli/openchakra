import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import FormControl from 'src/components/inspector/controls/FormControl'
import { useForm } from 'src/hooks/useForm'
import usePropsSelector from 'src/hooks/usePropsSelector'
import SwitchControl from 'src/components/inspector/controls/SwitchControl'
import TextControl from 'src/components/inspector/controls/TextControl'
import IconControl from 'src/components/inspector/controls/IconControl'

const SelectPanel = () => {
  const { setValueFromEvent } = useForm()

  const size = usePropsSelector('size')
  const variant = usePropsSelector('variant')

  return (
    <>
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

      <IconControl label="Icon" name="icon" />
      <TextControl label="Icon size" name="iconSize" />

      <FormControl label="variant" htmlFor="variant">
        <Select
          name="variant"
          id="variant"
          size="sm"
          value={variant}
          onChange={setValueFromEvent}
        >
          <option>outline</option>
          <option>unstyled</option>
          <option>flushed</option>
          <option>filled</option>
        </Select>
      </FormControl>

      <SwitchControl label="Invalid" name="isInvalid" />
      <SwitchControl label="Read Only" name="isReadOnly" />
    </>
  )
}

export default memo(SelectPanel)
